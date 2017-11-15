import { random, range } from 'lodash'

export const getCandlestickData = days => {
  const refDate = new Date()
  const r = range(1, days + 1)
  return r.map(n => {
    const a = random(0,1)
    const date = new Date(refDate).setDate(n)
    const high = random(500,600)
    const open = a > 0 ? random(high, high - random(25,50)) : random(high, high - random(0,25))
    const close = a > 0 ? random(high, high - random(0,25)) : random(high, high - random(25,50))
    const low = a > 0 ? random(open, open - random(0,25)) : random(close, close - random(0,25))
    return {
      a,
      date,
      open,
      close,
      high,
      low
    }
  })
}

export const ORDINAL_DATA = [
  [
    { "x": "AA", "y1": 12300 },
    { "x": "BB", "y1": 7500 },
    { "x": "CC", "y1": 15345 },
    { "x": "DD", "y1": 11100 },
    { "x": "EE", "y1": 9800 },
    { "x": "FF", "y1": 750 },
    { "x": "GG", "y1": 16030 },
    { "x": "HH", "y1": 12345 },
    { "x": "II", "y1": 7834 },
    { "x": "JJ", "y1": 4560 },
    { "x": "KK", "y1": 2300 },
    { "x": "LL", "y1": 11980 },
    { "x": "MM", "y1": 13765 },
    { "x": "NN", "y1": 8903 },
    { "x": "OO", "y1": 9367 }
  ],
  [
    { "x": "AA", "y1": 11200, "y2": 12300 },
    { "x": "BB", "y1": 8000, "y2": 7500 },
    { "x": "CC", "y1": 14300, "y2": 15345 },
    { "x": "DD", "y1": 12000, "y2": 11100 },
    { "x": "EE", "y1": 8670, "y2": 9800 },
    { "x": "FF", "y1": 1200, "y2": 750 },
    { "x": "GG", "y1": 16900, "y2": 16030 },
    { "x": "HH", "y1": 11000, "y2": 12345 },
    { "x": "II", "y1": 9810, "y2": 7834 },
    { "x": "JJ", "y1": 5650, "y2": 4560 },
    { "x": "KK", "y1": 2090, "y2": 2300 },
    { "x": "LL", "y1": 10600, "y2": 11980 },
    { "x": "MM", "y1": 14230, "y2": 13765 },
    { "x": "NN", "y1": 7810, "y2": 8903 },
    { "x": "OO", "y1": 9200, "y2": 9367 }
  ],
  [
    { "x": "AA", "y1": 11200, "y2": 12300, "y3": 10500, "y4": 2345, "y5": 5410 },
    { "x": "BB", "y1": 8000, "y2": 7500, "y3": 19250, "y4": 9750, "y5": 6500 },
    { "x": "CC", "y1": 14300, "y2": 15345, "y3": 6300, "y4": 8500, "y5": 12900 },
    { "x": "DD", "y1": 12000, "y2": 11100, "y3": 3910, "y4": 1900, "y5": 7350 },
    { "x": "EE", "y1": 8670, "y2": 9800, "y3": 12800, "y4": 4100, "y5": 5600 },
    { "x": "FF", "y1": 1200, "y2": 750, "y3": 5460, "y4": 1500, "y5": 1200 },
    { "x": "GG", "y1": 16900, "y2": 16030, "y3": 9760, "y4": 11300, "y5": 8600 },
    { "x": "HH", "y1": 11000, "y2": 12345, "y3": 9100, "y4": 7800, "y5": 13000 },
    { "x": "II", "y1": 9810, "y2": 7834, "y3": 13670, "y4": 8000, "y5": 10800 },
    { "x": "JJ", "y1": 5650, "y2": 4560, "y3": 12810, "y4": 3800, "y5": 8200 },
    { "x": "KK", "y1": 2090, "y2": 2300, "y3": 6900, "y4": 7100, "y5": 4870 },
    { "x": "LL", "y1": 10600, "y2": 11980, "y3": 16300, "y4": 11400, "y5": 9350 },
    { "x": "MM", "y1": 14230, "y2": 13765, "y3": 10870, "y4": 12000, "y5": 8250 },
    { "x": "NN", "y1": 7810, "y2": 8903, "y3": 2300, "y4": 5500, "y5": 6390 },
    { "x": "OO", "y1": 9200, "y2": 9367, "y3": 14500, "y4": 7200, "y5": 5950 }
  ]
]

export const TIME_SERIES = {
  "traffic": [
    { "date": "2017-08-01", "AA": 1234, "BB": 3489, "CC": 2190, "DD": 1357 },
    { "date": "2017-08-02", "AA": 1310, "BB": 2347, "CC": 2099, "DD": 1549 },
    { "date": "2017-08-03", "AA": 980, "BB": 1390, "CC": 1289, "DD": 1902 },
    { "date": "2017-08-04", "AA": 1523, "BB": 1569, "CC": 1763, "DD": 1409 },
    { "date": "2017-08-05", "AA": 1769, "BB": 1209, "CC": 2450, "DD": 1620 },
    { "date": "2017-08-06", "AA": 1123, "BB": 2345, "CC": 2123, "DD": 1460 },
    { "date": "2017-08-07", "AA": 1530, "BB": 2019, "CC": 2540, "DD": 1781 },
    { "date": "2017-08-08", "AA": 1340, "BB": 980, "CC": 2200, "DD": 1308 },
    { "date": "2017-08-09", "AA": 1290, "BB": 1420, "CC": 870, "DD": 1410 },
    { "date": "2017-08-10", "AA": 1120, "BB": 1789, "CC": 1590, "DD": 1691 },
    { "date": "2017-08-11", "AA": 1200, "BB": 2234, "CC": 2190, "DD": 991 },
    { "date": "2017-08-12", "AA": 1145, "BB": 990, "CC": 2890, "DD": 1200 },
    { "date": "2017-08-13", "AA": 940, "BB": 1305, "CC": 3289, "DD": 1124 },
    { "date": "2017-08-14", "AA": 920, "BB": 1190, "CC": 3900, "DD": 1430 },
    { "date": "2017-08-15", "AA": 870, "BB": 1560, "CC": 2520, "DD": 1260 },
    { "date": "2017-08-16", "AA": 750, "BB": 1392, "CC": 2239, "DD": 1529 },
    { "date": "2017-08-17", "AA": 820, "BB": 1289, "CC": 2180, "DD": 1412 },
    { "date": "2017-08-18", "AA": 670, "BB": 2410, "CC": 2450, "DD": 1501 },
    { "date": "2017-08-19", "AA": 984, "BB": 2530, "CC": 2130, "DD": 1790 },
    { "date": "2017-08-20", "AA": 1024, "BB": 2789, "CC": 3100, "DD": 1892 },
    { "date": "2017-08-21", "AA": 1148, "BB": 2200, "CC": 2678, "DD": 2190 },
    { "date": "2017-08-22", "AA": 1290, "BB": 1832, "CC": 2310, "DD": 2230 },
    { "date": "2017-08-23", "AA": 1490, "BB": 2100, "CC": 2530, "DD": 2100 },
    { "date": "2017-08-24", "AA": 1389, "BB": 1921, "CC": 2200, "DD": 1890 },
    { "date": "2017-08-25", "AA": 1220, "BB": 1678, "CC": 1690, "DD": 1940 },
    { "date": "2017-08-26", "AA": 1105, "BB": 1290, "CC": 1209, "DD": 1781 },
    { "date": "2017-08-27", "AA": 1234, "BB": 950, "CC": 890, "DD": 1205 },
    { "date": "2017-08-28", "AA": 1431, "BB": 1340, "CC": 1329, "DD": 1092 },
    { "date": "2017-08-29", "AA": 1940, "BB": 2078, "CC": 1570, "DD": 923 },
    { "date": "2017-08-30", "AA": 1730, "BB": 2280, "CC": 1865, "DD": 831 },
    { "date": "2017-08-31", "AA": 1620, "BB": 3050, "CC": 1720, "DD": 1034 },
    { "date": "2017-09-01", "AA": 1700, "BB": 2678, "CC": 1495, "DD": 1209 },
    { "date": "2017-09-02", "AA": 1590, "BB": 2310, "CC": 1575, "DD": 1105 },
    { "date": "2017-09-03", "AA": 1608, "BB": 3011, "CC": 1405, "DD": 1190 },
    { "date": "2017-09-04", "AA": 1390, "BB": 2890, "CC": 1150, "DD": 1230 },
    { "date": "2017-09-05", "AA": 1180, "BB": 3210, "CC": 2340, "DD": 1290 },
    { "date": "2017-09-06", "AA": 1421, "BB": 1690, "CC": 2100, "DD": 1301 },
    { "date": "2017-09-07", "AA": 1435, "BB": 870, "CC": 2039, "DD": 1525 },
    { "date": "2017-09-08", "AA": 1325, "BB": 1367, "CC": 1600, "DD": 1910 },
    { "date": "2017-09-09", "AA": 1290, "BB": 2800, "CC": 1960, "DD": 1290 },
    { "date": "2017-09-10", "AA": 1350, "BB": 2345, "CC": 2310, "DD": 1610 },
    { "date": "2017-09-11", "AA": 1378, "BB": 2671, "CC": 2190, "DD": 1891 },
    { "date": "2017-09-12", "AA": 1450, "BB": 2309, "CC": 1670, "DD": 1810 },
    { "date": "2017-09-13", "AA": 1389, "BB": 1390, "CC": 1509, "DD": 1710 },
    { "date": "2017-09-14", "AA": 1334, "BB": 890, "CC": 1890, "DD": 1450 },
    { "date": "2017-09-15", "AA": 1365, "BB": 987, "CC": 1200, "DD": 1690 },
    { "date": "2017-09-16", "AA": 1406, "BB": 1245, "CC": 990, "DD": 1743 },
    { "date": "2017-09-17", "AA": 1467, "BB": 1420, "CC": 1300, "DD": 1290 },
    { "date": "2017-09-18", "AA": 1497, "BB": 1569, "CC": 1290, "DD": 1420 },
    { "date": "2017-09-19", "AA": 1520, "BB": 1391, "CC": 1780, "DD": 1375 },
    { "date": "2017-09-20", "AA": 1669, "BB": 1100, "CC": 1920, "DD": 1450 },
    { "date": "2017-09-21", "AA": 1580, "BB": 990, "CC": 2240, "DD": 1100 },
    { "date": "2017-09-22", "AA": 1535, "BB": 1340, "CC": 2170, "DD": 1210 },
    { "date": "2017-09-23", "AA": 1468, "BB": 1670, "CC": 2090, "DD": 1389 },
    { "date": "2017-09-24", "AA": 1421, "BB": 1416, "CC": 1670, "DD": 1290 },
    { "date": "2017-09-25", "AA": 1385, "BB": 1692, "CC": 1210, "DD": 1182 },
    { "date": "2017-09-26", "AA": 1245, "BB": 1730, "CC": 1340, "DD": 1295 },
    { "date": "2017-09-27", "AA": 1260, "BB": 1599, "CC": 1200, "DD": 1360 },
    { "date": "2017-09-28", "AA": 1298, "BB": 1630, "CC": 1030, "DD": 1723 },
    { "date": "2017-09-29", "AA": 1305, "BB": 1321, "CC": 600, "DD": 1650 },
    { "date": "2017-09-30", "AA": 1376, "BB": 1450, "CC": 1340, "DD": 1902 }
  ],
  "price": [
    { "month": "Jan 2000", "usd": 1394.46 },
    { "month": "Feb 2000", "usd": 1366.42 },
    { "month": "Mar 2000", "usd": 1498.58 },
    { "month": "Apr 2000", "usd": 1452.43 },
    { "month": "May 2000", "usd": 1420.6 },
    { "month": "Jun 2000", "usd": 1454.6 },
    { "month": "Jul 2000", "usd": 1430.83 },
    { "month": "Aug 2000", "usd": 1517.68 },
    { "month": "Sep 2000", "usd": 1436.51 },
    { "month": "Oct 2000", "usd": 1429.4 },
    { "month": "Nov 2000", "usd": 1314.95 },
    { "month": "Dec 2000", "usd": 1320.28 },
    { "month": "Jan 2001", "usd": 1366.01 },
    { "month": "Feb 2001", "usd": 1239.94 },
    { "month": "Mar 2001", "usd": 1160.33 },
    { "month": "Apr 2001", "usd": 1249.46 },
    { "month": "May 2001", "usd": 1255.82 },
    { "month": "Jun 2001", "usd": 1224.38 },
    { "month": "Jul 2001", "usd": 1211.23 },
    { "month": "Aug 2001", "usd": 1133.58 },
    { "month": "Sep 2001", "usd": 1040.94 },
    { "month": "Oct 2001", "usd": 1059.78 },
    { "month": "Nov 2001", "usd": 1139.45 },
    { "month": "Dec 2001", "usd": 1148.08 },
    { "month": "Jan 2002", "usd": 1130.2 },
    { "month": "Feb 2002", "usd": 1106.73 },
    { "month": "Mar 2002", "usd": 1147.39 },
    { "month": "Apr 2002", "usd": 1076.92 },
    { "month": "May 2002", "usd": 1067.14 },
    { "month": "Jun 2002", "usd": 989.82 },
    { "month": "Jul 2002", "usd": 911.62 },
    { "month": "Aug 2002", "usd": 916.07 },
    { "month": "Sep 2002", "usd": 815.28 },
    { "month": "Oct 2002", "usd": 885.76 },
    { "month": "Nov 2002", "usd": 936.31 },
    { "month": "Dec 2002", "usd": 879.82 },
    { "month": "Jan 2003", "usd": 855.7 },
    { "month": "Feb 2003", "usd": 841.15 },
    { "month": "Mar 2003", "usd": 848.18 },
    { "month": "Apr 2003", "usd": 916.92 },
    { "month": "May 2003", "usd": 963.59 },
    { "month": "Jun 2003", "usd": 974.5 },
    { "month": "Jul 2003", "usd": 990.31 },
    { "month": "Aug 2003", "usd": 1008.01 },
    { "month": "Sep 2003", "usd": 995.97 },
    { "month": "Oct 2003", "usd": 1050.71 },
    { "month": "Nov 2003", "usd": 1058.2 },
    { "month": "Dec 2003", "usd": 1111.92 },
    { "month": "Jan 2004", "usd": 1131.13 },
    { "month": "Feb 2004", "usd": 1144.94 },
    { "month": "Mar 2004", "usd": 1126.21 },
    { "month": "Apr 2004", "usd": 1107.3 },
    { "month": "May 2004", "usd": 1120.68 },
    { "month": "Jun 2004", "usd": 1140.84 },
    { "month": "Jul 2004", "usd": 1101.72 },
    { "month": "Aug 2004", "usd": 1104.24 },
    { "month": "Sep 2004", "usd": 1114.58 },
    { "month": "Oct 2004", "usd": 1130.2 },
    { "month": "Nov 2004", "usd": 1173.82 },
    { "month": "Dec 2004", "usd": 1211.92 },
    { "month": "Jan 2005", "usd": 1181.27 },
    { "month": "Feb 2005", "usd": 1203.6 },
    { "month": "Mar 2005", "usd": 1180.59 },
    { "month": "Apr 2005", "usd": 1156.85 },
    { "month": "May 2005", "usd": 1191.5 },
    { "month": "Jun 2005", "usd": 1191.33 },
    { "month": "Jul 2005", "usd": 1234.18 },
    { "month": "Aug 2005", "usd": 1220.33 },
    { "month": "Sep 2005", "usd": 1228.81 },
    { "month": "Oct 2005", "usd": 1207.01 },
    { "month": "Nov 2005", "usd": 1249.48 },
    { "month": "Dec 2005", "usd": 1248.29 },
    { "month": "Jan 2006", "usd": 1280.08 },
    { "month": "Feb 2006", "usd": 1280.66 },
    { "month": "Mar 2006", "usd": 1294.87 },
    { "month": "Apr 2006", "usd": 1310.61 },
    { "month": "May 2006", "usd": 1270.09 },
    { "month": "Jun 2006", "usd": 1270.2 },
    { "month": "Jul 2006", "usd": 1276.66 },
    { "month": "Aug 2006", "usd": 1303.82 },
    { "month": "Sep 2006", "usd": 1335.85 },
    { "month": "Oct 2006", "usd": 1377.94 },
    { "month": "Nov 2006", "usd": 1400.63 },
    { "month": "Dec 2006", "usd": 1418.3 },
    { "month": "Jan 2007", "usd": 1438.24 },
    { "month": "Feb 2007", "usd": 1406.82 },
    { "month": "Mar 2007", "usd": 1420.86 },
    { "month": "Apr 2007", "usd": 1482.37 },
    { "month": "May 2007", "usd": 1530.62 },
    { "month": "Jun 2007", "usd": 1503.35 },
    { "month": "Jul 2007", "usd": 1455.27 },
    { "month": "Aug 2007", "usd": 1473.99 },
    { "month": "Sep 2007", "usd": 1526.75 },
    { "month": "Oct 2007", "usd": 1549.38 },
    { "month": "Nov 2007", "usd": 1481.14 },
    { "month": "Dec 2007", "usd": 1468.36 },
    { "month": "Jan 2008", "usd": 1378.55 },
    { "month": "Feb 2008", "usd": 1330.63 },
    { "month": "Mar 2008", "usd": 1322.7 },
    { "month": "Apr 2008", "usd": 1385.59 },
    { "month": "May 2008", "usd": 1400.38 },
    { "month": "Jun 2008", "usd": 1280 },
    { "month": "Jul 2008", "usd": 1267.38 },
    { "month": "Aug 2008", "usd": 1282.83 },
    { "month": "Sep 2008", "usd": 1166.36 },
    { "month": "Oct 2008", "usd": 968.75 },
    { "month": "Nov 2008", "usd": 896.24 },
    { "month": "Dec 2008", "usd": 903.25 },
    { "month": "Jan 2009", "usd": 825.88 },
    { "month": "Feb 2009", "usd": 735.09 },
    { "month": "Mar 2009", "usd": 797.87 },
    { "month": "Apr 2009", "usd": 872.81 },
    { "month": "May 2009", "usd": 919.14 },
    { "month": "Jun 2009", "usd": 919.32 },
    { "month": "Jul 2009", "usd": 987.48 },
    { "month": "Aug 2009", "usd": 1020.62 },
    { "month": "Sep 2009", "usd": 1057.08 },
    { "month": "Oct 2009", "usd": 1036.19 },
    { "month": "Nov 2009", "usd": 1095.63 },
    { "month": "Dec 2009", "usd": 1115.1 },
    { "month": "Jan 2010", "usd": 1073.87 },
    { "month": "Feb 2010", "usd": 1104.49 },
    { "month": "Mar 2010", "usd": 1140.45 }
  ]
}
