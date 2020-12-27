# stage4
geoNames API requesting data exercise



https://www.geonames.org/export/web-services.html#findNearbyPlaceName


instruction:
1. download the folder into the htdocs of xampp
2. go to localhost/findnearbyplacename
3. if you want to see how the php curl works go to the following url:
  localhost/findnearbyplacebyname/libs/php/findnearbyplacebyname.php


Index.html is written and only serves as bare tempplate which links to
the script.js
script.js files is an ajax post call to findNearbyPlaceName.php
findnearbyplacename.php imitates browising the url and returns a json object
which is read by the script.js which then writes to the index.html.
