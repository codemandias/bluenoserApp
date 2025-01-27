package com.example.beachbluenoser;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;

import com.google.firebase.auth.FirebaseAuth;


public class Login extends AppCompatActivity {

    EditText emailAddress;
    EditText passwordField;
    Button userLogin;
    Button signUp;
    Button forgotPassword;
    ImageButton rtnHome;
    private FirebaseAuth beachBluenoserAuth;
    String emailAuth;
    String passAuth;

    MediaPlayer mp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        userLogin = findViewById(R.id.loginBtn);
        signUp = findViewById(R.id.signupBtn);
        forgotPassword = findViewById(R.id.forgotPasswordBtn);
        rtnHome = findViewById(R.id.returnHomeButton);

        mp = MediaPlayer.create(this, R.raw.click);

        beachBluenoserAuth = FirebaseAuth.getInstance();
      /*  if (beachBluenoserAuth.getCurrentUser() != null) {
            finish();
            return;
        }
*/
        forgotPassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mp.start();
                Intent intent = new Intent(Login.this, PasswordReset.class);
                startActivity(intent);

            }
        });
        userLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mp.start();
                authenticateUser();

            }
        });


        signUp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mp.start();
                Intent intent = new Intent(Login.this, Registration.class);
                startActivity(intent);
            }
        });

        rtnHome.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mp.start();
                Intent intent = new Intent(Login.this, MainActivity.class);
                startActivity(intent);
            }
        });




    }

    private void authenticateUser() {
        emailAddress = findViewById(R.id.emailLogin);
        passwordField = findViewById(R.id.passwordLogin);

        emailAuth = emailAddress.getText().toString().trim();
        passAuth = passwordField.getText().toString().trim();

        if (emailAuth.isEmpty() || passAuth.isEmpty()) {
            Toast.makeText(Login.this, "Please enter a valid email address and password", Toast.LENGTH_LONG).show();

        } else {
            beachBluenoserAuth.signInWithEmailAndPassword(emailAuth, passAuth)
                    .addOnCompleteListener(this, task -> {
                        if (task.isSuccessful()) {
                            showMainActivity();
                        } else {
                            Toast.makeText(Login.this, "Authentication Failed!", Toast.LENGTH_LONG).show();
                        }
                    });
        }
    }
    private void showMainActivity() {
        Intent intent = new Intent(Login.this,MainActivity.class);
        startActivity(intent);
        Toast.makeText(Login.this, "Authentication was successful", Toast.LENGTH_LONG).show();
    }
}