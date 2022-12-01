package com.example.beachbluenoser;

import static android.content.ContentValues.TAG;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.View;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.Locale;
import java.util.Objects;

import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    final  FirebaseFirestore db = FirebaseFirestore.getInstance();
    private FirebaseAuth beachBluenoserAuth = FirebaseAuth.getInstance();
    ArrayList<BeachItem> beachList;


    String[] beach = {"All Beaches", "Rocky", "Sandy", "Shore Accessibility", "Floating Wheelchair"};
    String[] capacity = {"Any Capacity", "High", "Medium", "Low"};
    String filterBeachItem = "";
    String filterCapacityItem = "";

    public int calmWatersCount=0;
    public int mediumWatersCount=0;
    public int roughWatersCount=0;
    public int lowCapacityCount=0;
    public int mediumCapacityCount=0;
    public int highCapacityCount=0;
    public String visualWaterConditionsText;
    public String capacityText;


    public String currentDate;
    public String beachName;
    ArrayAdapter<String> adapterItems;

    AutoCompleteTextView beachType; //Beach
    AutoCompleteTextView capacityVolume; //Capacity

    interface MyCallback {
        void callbackCall();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final Button homeBtn = findViewById(R.id.HomeButton);
        final Button loginProfileBtn = findViewById(R.id.LoginButton);
        beachBluenoserAuth.signOut();
        if (beachBluenoserAuth.getCurrentUser() != null){
            loginProfileBtn.setText("Profile");
        }

        Date c = Calendar.getInstance().getTime();

        SimpleDateFormat df = new SimpleDateFormat("dd-MMM-yyyy", Locale.getDefault());
        String formattedDate = df.format(c);
        currentDate = formattedDate;


        homeBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent homeIntent = new Intent(MainActivity.this, MainActivity.class);
                startActivity(homeIntent);
            }
        });
        loginProfileBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (beachBluenoserAuth.getCurrentUser() != null){
                    Intent profileIntent = new Intent(MainActivity.this, Login.class); //TODO: Set to profile page
                    startActivity(profileIntent);
                } else {
                    Intent loginIntent = new Intent(MainActivity.this, Login.class);
                    startActivity(loginIntent);
                }
            }
        });
    }


    @Override
    protected void onResume() {
        super.onResume();
        getDataFromDbAndShowOnUI();
    }

    private void getDataFromDbAndShowOnUI() {
        // to toggle between the "deleted posts" and active posts button
        // resetToggle();
        final ArrayList<BeachItem> beachItemArrayList = new ArrayList<>();

        db.collection("beach")
                .get()
                .addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                    @Override
                    public void onComplete(@NonNull Task<QuerySnapshot> task) {
                        if (task.isSuccessful()) {
                            for (QueryDocumentSnapshot document : task.getResult()) {
                                Log.d(TAG, document.getId() + " => " + document.getData());
                                String DataName =  document.getData().get("name").toString();
                                beachName = DataName;
                                String beachCapacityTextForTheDay ="";
                                String beachVisualWaveConditionsTextForTheDay = "";
                                if(!(document.getData().get("beachCapacityTextForTheDay")==null)) {
                                     beachCapacityTextForTheDay = document.getData().get("beachCapacityTextForTheDay").toString();
                                }else{
                                    beachCapacityTextForTheDay="Beach Capacity: No data today!";
                                }
                                if(!(document.getData().get("beachVisualWaveConditionsTextForTheDay")==null)) {
                                     beachVisualWaveConditionsTextForTheDay = document.getData().get("beachVisualWaveConditionsTextForTheDay").toString();
                                }else{
                                    beachVisualWaveConditionsTextForTheDay ="Water Conditions: No data today!";
                                }
                                Object DataImage  = document.getData().get("image");
                                String DataImageValue;
                                if(DataImage == null){
                                    DataImageValue = "imageNotFound";
                                }else {
                                    DataImageValue = document.getData().get("image").toString();
                                }
                                String recyclerViewCapacityValue="";
                                String recyclerViewWheelChairRampValue="";
                                String recyclerViewSandyOrRockyValue="";
                                String recyclerViewVisualWaterConditionsValue="";
                                if(document.exists()){
                                    if(document.get("wheelchairRamp")!=null){
                                        recyclerViewWheelChairRampValue = document.get("wheelchairRamp").toString();
                                    }else{
                                        recyclerViewWheelChairRampValue = "";
                                    }
                                    if(document.get("sandyOrRocky")!=null){
                                        recyclerViewSandyOrRockyValue = document.get("sandyOrRocky").toString();
                                    }else{
                                        recyclerViewSandyOrRockyValue = "";
                                    }
                                }

                                retrieveAdditionalDataFromDB();

                                Log.d("PrintingHere","BeachName: "+DataName + " capacity: "+beachCapacityTextForTheDay +  " visualWaterConditions: " +beachVisualWaveConditionsTextForTheDay);
                                BeachItem beachItem = new BeachItem(DataName,DataImageValue,beachCapacityTextForTheDay,
                                        beachVisualWaveConditionsTextForTheDay,recyclerViewWheelChairRampValue,recyclerViewSandyOrRockyValue);
                                //beachItemArrayList.add(beachItem);
                                Log.d("Capacity:","cap:"+beachItem.getcapacity());
                                Log.d("FilterItem:","filterItem:"+filterCapacityItem);


                                if (Objects.equals(filterBeachItem, "") || Objects.equals(beachItem.getsandyOrRocky(), filterBeachItem)) {
                                    if (Objects.equals(filterCapacityItem, "") || Objects.equals(beachItem.getcapacity(), filterCapacityItem)) {
                                        beachItemArrayList.add(beachItem);
                                    }
                                }

                            }
                        } else {
                            Log.w(TAG, "Error getting documents.", task.getException());
                            Log.w("BeachRetrievalLoopERROR", "Error getting documents.", task.getException());
                        }

                        beachList = beachItemArrayList;
                        Collections.reverse(beachList);

                        loadMasterBeachList();
                    }
                });

        beachType = findViewById(R.id.auto_complete_textview);
        adapterItems = new ArrayAdapter<String>(this, R.layout.beach_list, beach);
        beachType.setAdapter(adapterItems);

        beachType.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                String beachItem = adapterView.getItemAtPosition(position).toString();
                Toast.makeText(MainActivity.this, beachItem + " Option", Toast.LENGTH_SHORT).show();
                beachList.clear();
                if (beachItem.equals("All Beaches")){
                    filterBeachItem = "";
                } else {
                    filterBeachItem = beachItem;
                }
                getDataFromDbAndShowOnUI();
            }

        });

        //Capacity
        capacityVolume = findViewById(R.id.auto_complete_textview2);

        ArrayAdapter<String> adapterItems2; //For Capacity
        adapterItems2 = new ArrayAdapter<String>(this, R.layout.capacity_list, capacity);
        capacityVolume.setAdapter(adapterItems2);

        // Capacity
        capacityVolume.setOnItemClickListener((new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                //dropdown item
                String capacityItem = adapterView.getItemAtPosition(position).toString();
                Toast.makeText(MainActivity.this, capacityItem, Toast.LENGTH_SHORT).show();
                beachList.clear();
                if (capacityItem.equals("Any Capacity")) {
                    filterCapacityItem = "";
                }
                else {
                    filterCapacityItem = "Beach Capacity: "+ capacityItem + " Capacity";
                }
                getDataFromDbAndShowOnUI();
            }
        }));
    }


    private void retrieveAdditionalDataFromDB(){
        DocumentReference landingBeachRef = db.collection("survey").document(currentDate).collection(beachName).document(currentDate);
        landingBeachRef.get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
            @SuppressLint("SuspiciousIndentation")
            @Override
            public void onComplete(@NonNull Task<DocumentSnapshot> task) {
                if (task.isSuccessful()) {
                    DocumentSnapshot document = task.getResult();
                    if (document.exists()) {
                        if(!(document.getData().get("beachCapacityTextForTheDay")==null))
                            capacityText  =document.getData().get("beachCapacityTextForTheDay").toString();
                        if(!(document.getData().get("beachVisualWaveConditionsTextForTheDay")==null))
                            visualWaterConditionsText  = document.getData().get("beachVisualWaveConditionsTextForTheDay").toString();




                       // showDataOnUI();
                    } else {
                        Log.d("Beach Landing Query", "No such document");
                       // showDataOnUI();
                    }
                } else {
                    Log.d("Beach Landing Query", "get failed with ", task.getException());
                }
            }
        });
    }



    private void loadMasterBeachList() {
        Log.w("Beach list size check22222", "B4444");
        Log.w("Beach list size check22222", "Beach list size "+beachList.size());
        createRecyclerView(beachList);
    }

    /**
     * creates the Recycler view for all my task posts
     * @param beachList list of all my posts
     */
    public void createRecyclerView(ArrayList<BeachItem> beachList) {


        RecyclerView recyclerView = (RecyclerView) findViewById(R.id.BeachMasterList);

        // using a linear layout manager
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);


        RecyclerView.Adapter mAdapter = new MasterBeachListAdapter(beachList);
        recyclerView.setAdapter(mAdapter);

        /*
        if(beachList != null && beachList.size() > 0){
            //hide message that says the list is empty
            emptyListTextView.setHeight(0);
        }else {
            emptyListTextView.setHeight(emptyListTextViewOriginalHeight);
        }

         */

    }

    /*
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onSupportNavigateUp() {
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_main);
        return NavigationUI.navigateUp(navController, appBarConfiguration)
                || super.onSupportNavigateUp();
    }

     */
}

