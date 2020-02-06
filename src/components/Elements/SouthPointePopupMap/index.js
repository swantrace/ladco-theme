import React from "react"
import jQuery from "jquery"

console.log(jQuery)

export default () => (
  <div className="hidden map-popup-container loading" id="map-popup">
    <a className="hidden" href="#" id="state"></a>{" "}
    <a className="hidden" href="#" id="viewfullmap">
      View full map
    </a>
    <div className="map-wrapper">
      <img
        alt=""
        className="map-image hidden"
        src="/southpointeimage.jpg"
        id="bigmapimng"
        useMap="#Map"
      />
      <map id="Map" name="Map">
        <area
          alt=""
          coords="1109,1044,1411,1056,1415,1091,1115,1088"
          href="http://www.pembinatrails.ca/index.html"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="1514,871,1519,907,1797,895,1784,848"
          href="http://hillsideconstruction.ca/"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="1744,1573,1738,1671,1933,1673,1917,1597,1829,1553"
          href="http://www.oakparkliving.ca/"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="1603,310,1607,361,1776,361,1760,307"
          href="http://www.lumenwinnipeg.com/lumen-rentals-winnipeg/"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="2437,1566,2687,1565,2736,1540,2814,1682,2439,1679"
          href="https://www.broadstreet.ca/property/165/south+pointe+terrace/"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="1306,1276,1338,1323,1321,1334,1288,1285"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="1439,1267,1459,1181,1402,1216,1426,1271"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="630,1420,649,1422,648,1481,630,1484"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="786,1423,784,1481,763,1481,763,1424"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="946,1434,919,1373,974,1387,958,1433"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="479,1597,482,1580,423,1569,418,1586"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="865,1504,884,1504,884,1549,864,1549"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="745,880,743,836,727,831,709,845,734,882"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="678,908,727,901,733,911,695,941"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="882,808,891,785,844,774,840,789"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="875,1135,893,1150,861,1187,845,1175"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="1030,1235,1052,1232,1055,1288,1033,1290"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="319,1455,324,1442,379,1459,373,1474"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="329,1424,334,1407,389,1424,383,1440"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="529,844,534,862,592,838,583,824"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="553,934,600,958,619,932,557,922"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="539,947,551,935,599,960,592,975"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="478,1020,489,1021,487,1070,460,1055"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="434,990,439,1041,405,1023,422,987"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="364,1004,415,981,420,988,402,1023"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="426,890,432,904,475,890,467,871"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="482,904,522,888,530,907,489,921"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="327,1228,334,1208,374,1225,368,1241"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="320,1230,325,1228,368,1243,355,1280"
          href="#"
          shape="poly"
          title=""
        ></area>
        &lt;!--
        <area
          alt=""
          coords="916,1235,935,1238,936,1297,905,1298"
          href="#"
          shape="poly"
          title=""
        ></area>
        <area
          alt=""
          coords="1577,273,1989,110,2222,549,2009,658,1991,738,1784,725"
          href="#"
          shape="poly"
          title="Stage 3"
        ></area>
        <area
          alt=""
          coords="1789,771,1987,764,2018,665,2222,562,2401,918,2011,1139,2016,1211,1998,1229,1941,1240,1784,1473,1500,1176,1780,974,1760,890,1810,866"
          href="#"
          shape="poly"
          title="Stage 2"
        ></area>
        <area
          alt=""
          coords="1817,1476,1962,1266,2015,1247,2042,1205,2044,1158,2432,960,2853,1722,2335,1690,2172,1656,1974,1588"
          href="#"
          shape="poly"
          title="Stage 1"
        ></area>
        <area
          alt=""
          coords="1758,1509,1656,1630,1524,1687,1255,1698,1251,1597,1319,1557,1289,1502,1227,1538,1152,1430,1218,1414,1119,1227,1088,1024,1348,945,1454,1172,1593,1353"
          href="#"
          shape="poly"
          title="Stage 4"
        ></area>
        <area
          alt=""
          coords="394,1694,449,1440,513,1375,559,1412,877,1419,910,1368,978,1386,1062,1346,1179,1346,1212,1412,1141,1416,1216,1540,1286,1516,1306,1557,1251,1590,1249,1698"
          href="#"
          shape="poly"
          title="Stage 5"
        ></area>
        <area
          alt=""
          coords="712,1348,778,1352,885,1291,1077,1282,1125,1260,1049,899,940,777,771,742,729,822,665,855,658,890,683,947,636,1066,643,1117,744,1176"
          href="#"
          shape="poly"
          title="Stage 6"
        ></area>
        <area
          alt=""
          coords="621,918,586,819,683,789,698,621,319,767,84,1264,273,1597,353,1553"
          href="#"
          shape="poly"
          title="Stage 7"
        ></area>
        <area
          name="3"
          alt=""
          title="Stage 3"
          href="#"
          shape="poly"
          coords="1577,273,1989,110,2222,549,2009,658,1991,738,1784,725"
        ></area>
        <area
          name="2"
          alt=""
          title="Stage 2"
          href="#"
          shape="poly"
          coords="1789,771,1987,764,2018,665,2222,562,2401,918,2011,1139,2016,1211,1998,1229,1941,1240,1784,1473,1500,1176,1780,974,1760,890,1810,866"
        ></area>
        <area
          name="1"
          alt=""
          title="Stage 1"
          href="#"
          shape="poly"
          coords="1817,1476,1962,1266,2015,1247,2042,1205,2044,1158,2432,960,2853,1722,2335,1690,2172,1656,1974,1588"
        ></area>
        <area
          name="4"
          alt=""
          title="Stage 4"
          href="#"
          shape="poly"
          coords="1758,1509,1656,1630,1524,1687,1255,1698,1251,1597,1319,1557,1289,1502,1227,1538,1152,1430,1218,1414,1119,1227,1088,1024,1348,945,1454,1172,1593,1353"
        ></area>
        <area
          name="5"
          alt=""
          title="Stage 5"
          href="#"
          shape="poly"
          coords="394,1694,449,1440,513,1375,559,1412,877,1419,910,1368,978,1386,1062,1346,1179,1346,1212,1412,1141,1416,1216,1540,1286,1516,1306,1557,1251,1590,1249,1698"
        ></area>
        <area
          name="6"
          alt=""
          title="Stage 6"
          href="#"
          shape="poly"
          coords="712,1348,778,1352,885,1291,1077,1282,1125,1260,1049,899,940,777,771,742,729,822,665,855,658,890,683,947,636,1066,643,1117,744,1176"
        ></area>
        <area
          name="7"
          alt=""
          title="Stage 7"
          href="#"
          shape="poly"
          coords="621,918,586,819,683,789,698,621,319,767,84,1264,273,1597,353,1553"
        ></area>
      </map>
    </div>
  </div>
)