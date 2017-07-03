# fixparserjs

`fixparserjs` is a [FIX Protocol](http://www.fixtradingcommunity.org/) parse module for Node.js.

When not specified the message fields are parsed using the "Start Of Header" character (ASCII 01) otherwise the user can specify the delimiter character to be used. 

Supports FIX protocols 4.0  to 4.4.

Tested with node v6.9.5

## Installation

    $ npm install fixparserjs

## JSON format output

```js
{
Header : {},
Body : {},
Trailer : {}
}
```

**Example of use**
=================================

```js
const fixparse = require('fixparserjs');

const fix42test_1 = "8=FIX.4.2\u00019=0\u000135=8\u000149=JWEK\u000156=BNJM\u000134=3\u000150=5157\u000157=5850\u000152=20150406-12:17:27\u000111=d3e3f1b3-da8a-4310-884e-9abc3cc0980b\u000137=acd163dd-232d-4bc5-9dcb-9f484a0462c3\u000141=1aa523a8-2533-4c96-97ac-f717b358773b\u0001109=711910\u000176=711910\u000117=b7969f8e-56d3-40c8-b2dc-75322b76ec1a\u000120=0\u000139=2\u00011=JWEK849300461\u000155=HCBK\u000148=464288430\u000122=1\u000154=2\u000138=80300\u000140=1\u000159=0\u000132=80300\u000131=48.141000\u000130=O\u000129=1\u000114=80300\u00016=280.99\u000175=20150406-12:17:27\u000160=20150406-12:17:27\u0001150=2\u0001151=0\u0001207=P\u000110=0\u0001";
const fix42test_2 = "8=FIX.4.2^9=153^35=D^49=BLP^56=SCHB^34=1^50=30737^97=Y^52=20000809-20:20:50^11=90001008^1=10030003^21=2^55=TESTA^54=1^38=4000^40=2^59=0^44=30^47=I^60=20000809-18:20:32^10=061^";
const fix44test_2 = "8=FIX.4.4|9=244|35=s|34=5|49=sender|52=20060319-09:08:20.881|56=target|22=8|40=2|44=9|48=ABC|55=ABC|60=20060319-09:08:19|548=184214|549=2|550=0|552=2|54=1|38=9|453=2|448=8|447=D|452=4|448=AAA35777|447=D|452=3|54=2|38=9|453=2|448=8|447=D|452=4|448=aaa|447=D|452=3|10=100|8=FIX.4.4|9=244|35=s|34=5|49=sender|52=20060319-09:08:20.881|56=target|22=8|40=2|44=9|48=ABC|55=ABC|60=20060319-09:08:19|548=184214|549=2|550=0|552=2|54=1|38=9|453=2|448=8|447=D|452=4|448=AAA35777|447=D|452=3|54=2|38=9|453=2|448=8|447=D|452=4|448=aaa|447=D|452=3|10=100|8=FIX.4.4|9=244|35=s|34=5|49=sender|52=20060319-09:08:20.881|56=target|22=8|40=2|44=9|48=ABC|55=ABC|60=20060319-09:08:19|548=184214|549=2|550=0|552=2|54=1|38=9|453=2|448=8|447=D|452=4|448=AAA35777|447=D|452=3|54=2|38=9|453=2|448=8|447=D|452=4|448=aaa|447=D|452=3|10=100|8=FIX.4.4|9=244|35=s|34=5|49=sender|52=20060319-09:08:20.881|56=target|22=8|40=2|44=9|48=ABC|55=ABC|60=20060319-09:08:19|548=184214|549=2|550=0|552=2|54=1|38=9|453=2|448=8|447=D|452=4|448=AAA35777|447=D|452=3|54=2|38=9|453=2|448=8|447=D|452=4|448=aaa|447=D|452=3|10=100";

// Using the default "SOH" 'Start of Header' delimiter
console.log(fixparse.parse(fix42test_1));

// Using '^' character as delimiter
console.log(fixparse.parse(fix42test_2,'^'));

// Using '|' character as delimiter
console.log(fixparse.parse(fix44test_2,'|'));

```

## License

<pre>
The MIT License (MIT)

Copyright (c) 2013-2016 Ricardo Levano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre>
