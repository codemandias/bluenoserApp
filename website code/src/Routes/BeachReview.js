import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Box from '@mui/material/Box';




function BeachSearch() {
  const containerStyle = {
    width: '500px',
    height: '500px',
    zoom: 1,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAK-mrXZsrKrWqsghmnsnznPVLMKhnCYKg"
  })

  const [map, setMap] = React.useState(null)
  const [beach, setBeach] = React.useState();
  let center = {
    lat: 45.11629851584344,
    lng: -64.24669952107287
}
  if(beach === "Avonport Beach"){
     center = {
        lat: 45.11629851584344,
        lng: -64.24669952107287
    }
}
    else if(beach === "Aylesford Lake"){
        center = {
            lat: 44.947563938732074, 
            lng: -64.67936220762942   
        }
    }
    else if(beach === "Bartlett's Beach"){
        center = {
           lat: 44.02384233540576, 
           lng: -66.16003010683905
       }
   }
       else if(beach === "Baxter's Harbour"){
           center = {
               lat: 45.23061340333382,
               lng:  -64.51503561295601   
           }
       }
       else if(beach === "Green Bay Beach"){
        center = {
           lat: -3.745,
           lng: -38.523
       }
   }
       else if(beach === "Beach Meadows"){
           center = {
               lat: 44.06517060748319, 
               lng: -64.63826883068543  
           }
       }
       else if(beach === "Big Island"){
        center = {
           lat: 45.654318005616105, 
           lng: -62.43829944299092
       }
   }
       else if(beach === "Black brook"){
           center = {
               lat: 46.217097019297235, 
               lng: -60.4334618460282  
           }
       }
       else if(beach === "Black Duck Cove"){
        center = {
           lat: 44.53706671760118, 
           lng: -63.93985436931455
       }
   }
       else if(beach === "Blomidon Beach"){
           center = {
               lat: 45.26789475416341, 
               lng: -64.34282541741165  
           }
       }
       else if(beach === "Blue Beach"){
        center = {
           lat: 45.09760129162969, 
           lng: -64.21311449999999
       }
   }
       else if(beach === "Blue Sea Beach"){
           center = {
               lat: 45.805846765437316,
               lng:  -63.30059622648999 
           }
       }
       else if(beach === "Broad Cove Beach"){
        center = {
           lat: 46.71605600713116, 
           lng: -60.35151991065078
       }
   }
       else if(beach === "Crescent Beach"){
           center = {
               lat: 44.24596936551561, 
               lng: -64.40394868375944  
           }
       }
       else if(beach === "Cabots Landing Provincial Park"){
        center = {
           lat: 46.9437313734574, 
           lng: -60.464387774683175
       }
   }
       else if(beach === "Cape Jack Beach"){
           center = {
               lat: 45.6836580637388, 
               lng: -61.57474714587808  
           }
       }
       else if(beach === "Caribou/Munroe's Island Provincial Park"){
        center = {
           lat: 45.74566864502504, 
           lng: -62.67387458147933
       }
   }
       else if(beach === "Carters Beach"){
           center = {
               lat: 43.91001670959282, 
               lng: -64.82510812974374  
           }
       }
       else if(beach === "Chimney Corner Beach"){
        center = {
           lat: 46.39220000858481,
           lng:  -61.16768376458666
       }
   }
       else if(beach === "Clam Harbour Beach"){
           center = {
               lat: 44.73087516554219, 
               lng: -62.88648678988444   
           }
       }
       else if(beach === "Cleveland Beach"){
        center = {
           lat: 44.64998639732485, 
           lng: -63.99860144405277
       }
   }
       else if(beach === "Crescent Beach"){
           center = {
               lat: 44.246461242666086, 
               lng: -64.4044636678721  
           }
       }
       else if(beach === "Crows Neck Beach"){
        center = {
           lat: 43.47025952799679,
           lng: -65.4698575155965
       }
   }
       else if(beach === "Crystal Crescent Beach"){
           center = {
               lat: 44.461724435420464, 
               lng: -63.618253471164316  
           }
       }
       else if(beach === "Cunard's Beach"){
        center = {
           lat: 44.31994115006243, 
           lng: -64.25679090173172
       }
   }
       else if(beach === "Dollar Lake Beach"){
           center = {
               lat: 44.92965937641158, 
               lng: -63.32172723534199  
           }
       }
       else if(beach === "Driftwood Beach"){
        center = {
            lat: 44.53016366293086, 
            lng: -64.12359621349297 
        }
    }
    else if(beach === "Evangeline Beach"){
     center = {
        lat: 45.139389132979005, 
        lng: -64.31902002789342
    }
}
    else if(beach === "Fox Island Beach"){
        center = {
            lat: 45.38752137463458, 
            lng: -61.11322162289844  
        }
    }
    else if(beach === "Freda's Beach"){
     center = {
        lat: 44.53549353763393,
        lng:  -64.24333068638403
    }
}
    else if(beach === "Green Bay Beach"){
        center = {
            lat: 44.2152703145465, 
            lng: -64.43681991534272  
        }
    }
    else if(beach === "Gulf Shore Beach"){
     center = {
        lat: 45.87356852318764, 
        lng: -63.6265347
    }
}
    else if(beach === "Halls Harbour"){
        center = {
            lat: 45.199018715621314,
            lng: -64.61664688274645  
        }
    }
    else if(beach === "Hampton Beach"){
     center = {
        lat: 45.143267786915594, 
        lng: -62.54659437734108
    }
}
    else if(beach === "Harbourville Beach"){
        center = {
            lat: 45.151810687107314, 
            lng: -64.81038459260095   
        }
    }
    else if(beach === "Heathers Beach"){
     center = {
        lat: 45.87739425126751, 
        lng: -63.76246676538813
    }
}
    else if(beach === "Hirtle's Beach"){
        center = {
            lat: 44.26623037591243,
            lng: -64.27217677578524  
        }
    }
    else if(beach === "Houston Beach"){
     center = {
        lat: 45.21614016398252, 
        lng: -64.36590731297747
    }
}
    else if(beach === "Hunts Point Beach"){
        center = {
            lat: 44.24501734464665,
            lng: -64.40403443449831   
        }
    }
    else if(beach === "Ingonish Beach"){
     center = {
        lat: 43.953344751930786, 
        lng: -64.77259280693785
    }
}
    else if(beach === "Inverness"){
        center = {
            lat: 46.2328271788285, 
            lng: -61.31233848539692   
        }
    }
    else if(beach === "Inverness Beach Village"){
     center = {
        lat: 46.2328271788285, 
        lng: -61.31233848539692   
    }
}
    else if(beach === "John's Cove"){
        center = {
            lat: 43.80412883213434, 
            lng: -66.15018184578862   
        }
    }
    else if(beach === "Kejimkujik Seaside"){
     center = {
        lat: 43.83839066878449, 
        lng: -64.85643525756454
    }
}
    else if(beach === "Kingsport Beach"){
        center = {
            lat: 45.159579931886576, 
            lng: -64.35952483054766 
        }
    }
    else if(beach === "Lake George"){
     center = {
        lat: 44.92518728242866, 
        lng: -64.6959973827358
    }
}
    else if(beach === "Lawrencetown Beach"){
        center = {
            lat: 44.644976502555934, 
            lng: -63.34154720590168 
        }
    }
    else if(beach === "Louis Head Beach"){
     center = {
        lat: 43.75032196082191,
        lng: -65.01678683068543
    }
}
    else if(beach === "MacCormack's Beach and Provincial Park"){
        center = {
            lat: 44.60783579571813, 
            lng: -63.492569845903375   
        }
    }
    else if(beach === "MacKinnon's Cove"){
        center = {
           lat: 46.76159635704158, 
           lng: -60.32434597989413
       }
   }
       else if(beach === "Margaree Harbour"){
           center = {
               lat: 46.434015129620285, 
               lng: -61.10672259520675
           }
       }
       else if(beach === "Margaretsville Beach"){
        center = {
           lat: 45.049211478772875, 
           lng: -65.06503449267541
       }
   }
       else if(beach === "Martinique Beach"){
           center = {
               lat: 44.69444689361818, 
               lng: -63.12056997592979  
           }
       }
       else if(beach === "Mavillette Beach"){
        center = {
           lat: 44.08534464184102, 
           lng: -66.18319031468427
       }
   }
       else if(beach === "McDonalds Cove Beach"){
           center = {
               lat: 44.61993147836212, 
               lng: -63.9343927059403  
           }
       }
       else if(beach === "Melmerby Beach"){
        center = {
           lat: 45.65694242994005, 
           lng: -62.50104067367249
       }
   }
       else if(beach === "Neil's harbour"){
           center = {
               lat: 46.80996157234034, 
               lng: -60.321421525300345  
           }
       }
       else if(beach === "North Bay"){
        center = {
            lat: 46.673964736337254, 
            lng: -60.377672733337086  
        }
    }
    else if(beach === "Northport Beach Provincial Park"){
     center = {
        lat: 45.927041695969834, 
        lng: -63.84412291703646
    }
}
    else if(beach === "Peggy's Cove"){
        center = {
            lat: 44.4941876898705, 
            lng: -63.91582484944837   
        }
    }
    else if(beach === "Point Pleasant Park Beach"){
     center = {
        lat: 44.624398242143954,
        lng: -63.564337298353806
    }
}
    else if(beach === "Pomquet beach"){
        center = {
            lat: 45.647603449513824, 
            lng: -61.80061070437171 
        }
    }
    else if(beach === "Pondville Beach"){
     center = {
        lat: 45.53615213845962, 
        lng: -60.978509243487046
    }
}
    else if(beach === "Port Bickerton Lighthouse Beach Park"){
        center = {
            lat: 45.09094328933303, 
            lng: -61.700879534533456 
        }
    }
    else if(beach === "Port Hood Beach"){
     center = {
        lat: 46.02073258138293, 
        lng: -61.53859670169144
    }
}
    else if(beach === "Port Joli Beach"){
        center = {
            lat: 43.845251613478105, 
            lng: -64.88262007181793  
        }
    }
    else if(beach === "Port Maitland Beach"){
     center = {
        lat: 43.98873588038657, 
        lng: -66.15498616031248
    }
}
    else if(beach === "Pt. Michaud"){
        center = {
            lat: 45.59367035005782, 
            lng: -60.68038393513994 
        }
    }
    else if(beach === "Queensland Beach"){
     center = {
        lat: 44.63705915887375, 
        lng: -64.02612604454377
    }
}
    else if(beach === "Rainbow Haven"){
        center = {
            lat: 44.64929919042395, 
            lng: -63.41475962823378  
        }
    }
    else if(beach === "Raven Haven"){
     center = {
        lat: 44.5786751036511,
        lng:  -65.42901418823276
    }
}
    else if(beach === "Rissers Beach"){
        center = {
            lat: 44.231405792222645, 
            lng: -64.42754710358365   
        }
    }
    else if(beach === "Roseway Beach"){
     center = {
        lat: 43.60267142239617, 
        lng: -65.34775269951358
    }
}
    else if(beach === "Ross Creek"){
        center = {
            lat: 45.24604172589736, 
            lng: -64.45623000498874  
        }
    }
    else if(beach === "Round Bay beach"){
     center = {
        lat: 43.595029027599836, 
        lng: -65.35752518640567
    }
}
    else if(beach === "Sand Dollar Beach"){
        center = {
            lat: 44.24501734464665,
            lng: -64.40403443449831   
        }
    }
    else if(beach === "Sand Hills Beach provincial park"){
     center = {
        lat: -3.745,
        lng: -38.523
    }
}
    else if(beach === "Sandy Cove Beach"){
        center = {
            lat: 44.303386798979915, 
            lng: -64.29760883710102 
        }
    }
    else if(beach === "Sandy Point Lighthouse Beach"){
     center = {
        lat: 44.72781570717071, 
        lng: -63.300862375091064
    }
}
    else if(beach === "Scott's Bay"){
        center = {
            lat: 45.3006863026742, 
            lng: -64.39759610170873   
        }
    }
    else if(beach === "Summerville Beach"){
        center = {
            lat: 45.09630526982209, 
            lng: -64.17180843590195   
        }
    }
    else if(beach === "Taylors Head Provincial Park"){
     center = {
        lat: 44.84741903392856, 
        lng: -62.57167255306608
    }
}
    else if(beach === "The Hawk Beach"){
        center = {
            lat: 43.41347704878803,
            lng: -65.61535136910697 
        }
    }
    else if(beach === "Thomas Raddall Provincial Park"){
     center = {
        lat: 43.83960238313341, 
        lng: -64.90448017344313
    }
}
    else if(beach === "Tor Bay"){
        center = {
            lat: 45.19948739397963, 
            lng: -61.36657766642966  
        }
    }
    else if(beach === "Upalong Beach"){
     center = {
        lat: 45.77496959028388, 
        lng: -62.91130703053299
    }
}
    else if(beach === "Waterside Park Beach"){
        center = {
            lat: 45.761130964094946, 
            lng: -62.77722170169778 
        }
    }
    else if(beach === "Whale Cove"){
     center = {
        lat: 44.47329330987562, 
        lng: -63.703138436845926
    }
}
    else if (beach === "White Point Beach"){
        center = {
            lat: 43.966017143387305, 
            lng: -64.73568972872583
        }
    }
    

    
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <Box id="pagebox" sx={{ display: 'flex', height: '100vh' }} marginTop={7} marginLeft={7.8} >
    <div>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
    <h1>Selected Beach: {beach}</h1><br/>
    <select id="beaches" value={beach} 
            onChange={(e) => setBeach(e.target.value)}>
      <option value="Avonport Beach">Avenport Beach</option>
      <option value="Aylesford Lake">Aylesford Lake</option>
      <option value="Bartlett's Beach">Bartlett's Beach</option>
      <option value="Baxter's Harbour">Baxter's Harbour</option>
      <option value="Bayswater">Bayswater</option>
      <option value="Beach Meadows">Beach Meadows</option>
      <option value="Big Island">Big Island</option>
      <option value="Black brook">Black brook</option>
      <option value="Black Duck Cove">Black Duck Cove</option>
      <option value="Blomidon Beach">Blomidon Beach</option>
      <option value="Blue Beach">Blue Beach</option>
      <option value="Blue Sea Beach">Blue Sea Beach</option>
      <option value="Broad Cove Beach">Broad Cove Beach</option>
      <option value="Cabots Landing Provincial Park">Cabots Landing Provincial Park</option>
      <option value="Cape Jack Beach">Cape Jack Beach</option>
      <option value="Caribou/Munroe's Island Provincial Park">Caribou/Munroe's Island Provincial Park</option>
      <option value="Carters Beach">Carters Beach</option>
      <option value="Chimney Corner Beach">Chimney Corner Beach</option>
      <option value="Clam Harbour Beach">Clam Harbour Beach</option>
      <option value="Cleveland Beach">Cleveland Beach</option>
      <option value="Crescent Beach">Crescent Beach</option>
      <option value="Crows Neck Beach">Crows Neck Beach</option>
      <option value="Crystal Crescent Beach">Crystal Crescent Beach</option>
      <option value="Cunard's Beach">Cunard's Beach</option>
      <option value="Dollar Lake Beach">Dollar Lake Beach</option>
      <option value="Driftwood Beach">Driftwood Beach</option>
      <option value="Evangeline Beach">Evangeline Beach</option>
      <option value="Fox Island Beach">Fox Island Beach</option>
      <option value="Freda's Beach">Freda's Beach</option>
      <option value="Green Bay Beach">Green Bay Beach</option>
      <option value="Gulf Shore Beach">Gulf Shore Beach</option>
      <option value="Halls Harbour">Halls Harbour</option>
      <option value="Hampton Beach">Hampton Beach</option>
      <option value="Harbourville Beach">Harbourville Beach</option>
      <option value="Heathers Beach">Heathers Beach</option>
      <option value="Hirtle's Beach">Hirtle's Beach</option>
      <option value="Houston Beach">Houston Beach</option>
      <option value="Hunts Point Beach">Hunts Point Beach</option>
      <option value="Ingonish Beach">Ingonish Beach</option>
      <option value="Inverness">Inverness</option>
      <option value="Inverness Beach Village">Inverness Beach Village</option>
      <option value="John's Cove">John's Cove</option>
      <option value="Kejimkujik Seaside">Kejimkujik Seaside</option>
      <option value="Kingsport Beach">Kingsport Beach</option>
      <option value="Lake George">Lake George</option>
      <option value="Lawrencetown Beach">Lawrencetown Beach</option>
      <option value="Louis Head Beach">Louis Head Beach</option>
      <option value="MacCormack's Beach and Provincial Park">MacCormack's Beach and Provincial Park</option>
      <option value="MacKinnon's Cove">MacKinnon's Cove</option>
      <option value="Margaree Harbour">Margaree Harbour</option>
      <option value="Margaretsville Beach">Margaretsville Beach</option>
      <option value="Martinique Beach">Martinique Beach</option>
      <option value="Mavillette Beach">Mavillette Beach</option>
      <option value="McDonalds Cove Beach">McDonalds Cove Beach</option>
      <option value="Melmerby Beach">Melmerby Beach</option>
      <option value="Neil's harbour">Neil's harbour</option>
      <option value="North Bay">North Bay</option>
      <option value="Northport Beach Provincial Park">Northport Beach Provincial Park</option>
      <option value="Peggy's Cove">Peggy's Cove</option>
      <option value="Point Pleasant Park Beach">Point Pleasant Park Beach</option>
      <option value="Pomquet beach">Pomquet beach</option>
      <option value="Pondville Beach">Pondville Beach</option>
      <option value="Port Bickerton Lighthouse Beach Park">Port Bickerton Lighthouse Beach Park</option>
      <option value="Port Hood Beach">Port Hood Beach</option>
      <option value="Port Joli Beach">Port Joli Beach</option>
      <option value="Port Maitland Beach">Port Maitland Beach</option>
      <option value="Pt. Michaud">Pt. Michaud</option>
      <option value="Queensland Beach">Queensland Beach</option>
      <option value="Rainbow Haven">Rainbow Haven</option>
      <option value="Raven Haven">Raven Haven</option>
      <option value="Rissers Beach">Rissers Beach</option>
      <option value="Roseway Beach">Roseway Beach</option>
      <option value="Ross Creek">Ross Creek</option>
      <option value="Round Bay beach">Round Bay beach</option>
      <option value="Sand Dollar Beach">Sand Dollar Beach</option>
      <option value="Sand Hills Beach provincial park">Sand Hills Beach provincial park</option>
      <option value="Sandy Cove Beach">Sandy Cove Beach</option>
      <option value="Sandy Point Lighthouse Beach">Sandy Point Lighthouse Beach</option>
      <option value="Scott's Bay">Scott's Bay</option>
      <option value="Summerville Beach">Summerville Beach</option>
      <option value="Taylors Head Provincial Park">Taylors Head Provincial Park</option>
      <option value="The Hawk Beach">The Hawk Beach</option>
      <option value="Thomas Raddall Provincial Park">Thomas Raddall Provincial Park</option>
      <option value="Tor Bay">Tor Bay</option>
      <option value="Upalong Beach">Upalong Beach</option>
      <option value="Waterside Park Beach">Waterside Park Beach</option>
      <option value="Whale Cove">Whale Cove</option>
      <option value="White Point Beach">White Point Beach</option>
      
    </select>
    
  <br/>
  
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        text-align
      />
        <></>
      
      </div>
      </div>
      </Box>
  ) : <></>
  
}

export default BeachSearch
