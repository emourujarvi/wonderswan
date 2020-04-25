HTML file that reads WonderSwan hand console game ROM for details.

Currently is able to read ROM header information:

* Publisher ID 		
* System 		
* Game ID 		
* Game revision 		
* ROM size 		
* Save size/type 		
* Flags 		
* RTC 		
* 16-bit checksum

`index.html` must be provided via a web server, because import of local js files is prevented by browsers.
e.g. `python3 -m http.server 8080`

Header structure and content based on http://daifukkat.su/docs/wsman/