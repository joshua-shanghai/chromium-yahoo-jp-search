# chromium-yahoo-jp-search
make yahoo jp search work from china

To use yahoo jp search from china, do the following steps:

1. add the following entries to your hosts file. 
<pre>
183.79.250.251 search.yahoo.co.jp
182.22.25.252  s.yimg.jp
183.79.249.252 b11.yahoo.co.jp
</pre>
the hosts file is in /etc/ on Linux, normally in c:\windows\system32\ on windows,
and /private/etc/ on mac.

2. from chromium browser, enter chromium://extensions and hit return key. then click "Load unpacked extension ..." and follow the UI to load this extension.

TODO:
The following script succeeds in jp but fails in cn. why?
<pre>
curl -v \
	-H "Connection: keep-alive" \
	-H "Referer: https://search.yahoo.co.jp" \
	-H "User-agent: Mozilla/5.0 AppleWebKit/537" \
	"http://search.yahoo.co.jp/r/FOR=7NniST5V3ihHZNmuYH5NHt.LcmiWxn8WeoEfsx7KkJiuwFOX_iGK7BjnQEAUo63bUJYir.PkU1rUPURMk8QOECmGqQz7xeabJ3l41szPwHNnUiTKARetTRBAfQ63peJqqOEr9cyP7WZp0NbR9Tld720ro7jfyzo6Y0q1S9b7sszKpr3bhiH0tg1hkmObVcBbbmMBECHTjcFtakRaCQryzF7nEDUQZk.vKcLYgdeZnUJra7e0yMjFXKP_cjlSrt_0dXOwkVt0DvPpPD5wUvCgRo5znEtbRrTVDKbiLOV2otnx1ybNPCMCvI4H3ypf_TNGxEGZ/_ylt=A2RCCbgKQCJagicAM7SDTwx.;_ylu=X3oDMTEycmhzazExBHBvcwMxBHNlYwNzcgRzbGsDdGl0bGUEdnRpZANqcDAwNDA-/SIG=14cfpb8sh/EXP=1512294858/**https%3A//ja.wikipedia.org/wiki/%25E3%2583%25A1%25E3%2582%25A4%25E3%2583%25B3%25E3%2583%259A%25E3%2583%25BC%25E3%2582%25B8"

The good resonse from JP:
----------------------------

*   Trying 183.79.249.124...
* TCP_NODELAY set
* Connected to search.yahoo.co.jp (183.79.249.124) port 80 (#0)
> GET /r/FOR=7NniST5V3ihHZNmuYH5NHt.LcmiWxn8WeoEfsx7KkJiuwFOX_iGK7BjnQEAUo63bUJYir.PkU1rUPURMk8QOECmGqQz7xeabJ3l41szPwHNnUiTKARetTRBAfQ63peJqqOEr9cyP7WZp0NbR9Tld720ro7jfyzo6Y0q1S9b7sszKpr3bhiH0tg1hkmObVcBbbmMBECHTjcFtakRaCQryzF7nEDUQZk.vKcLYgdeZnUJra7e0yMjFXKP_cjlSrt_0dXOwkVt0DvPpPD5wUvCgRo5znEtbRrTVDKbiLOV2otnx1ybNPCMCvI4H3ypf_TNGxEGZ/_ylt=A2RCCbgKQCJagicAM7SDTwx.;_ylu=X3oDMTEycmhzazExBHBvcwMxBHNlYwNzcgRzbGsDdGl0bGUEdnRpZANqcDAwNDA-/SIG=14cfpb8sh/EXP=1512294858/**https%3A//ja.wikipedia.org/wiki/%25E3%2583%25A1%25E3%2582%25A4%25E3%2583%25B3%25E3%2583%259A%25E3%2583%25BC%25E3%2582%25B8 HTTP/1.1
> Host: search.yahoo.co.jp
> Accept: */*
> Referer: https://search.yahoo.co.jp
> User-agent: Mozilla/5.0 AppleWebKit/537
> 
< HTTP/1.1 200 OK
< Date: Sat, 02 Dec 2017 07:54:32 GMT
< P3P: policyref="http://privacy.yahoo.co.jp/w3c/p3p_jp.xml", CP="CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE GOV"
< X-Content-Type-Options: nosniff
< X-XSS-Protection: 1; mode=block
< X-Frame-Options: SAMEORIGIN
< Cache-Control: private, max-age=0, no-cache
< Content-Length: 319
< Content-Type: text/html
< Age: 0
< Connection: keep-alive
< Via: http/1.1 edge2270.img.umd.yahoo.co.jp (ApacheTrafficServer [c sSf ])
< Server: ATS
< 
* Connection #0 to host search.yahoo.co.jp left intact
<meta name="referrer" content="origin"><script>window.location.replace("https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8");</script><noscript><meta http-equiv="refresh" content="0;URL='https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8'"></noscript>  
</pre>

And the BAD reponse in CN:
-------------------------
*   Trying 183.79.250.251...
* TCP_NODELAY set
* Connected to search.yahoo.co.jp (183.79.250.251) port 80 (#0)
> GET /r/FOR=7NniST5V3ihHZNmuYH5NHt.LcmiWxn8WeoEfsx7KkJiuwFOX_iGK7BjnQEAUo63bUJYir.PkU1rUPURMk8QOECmGqQz7xeabJ3l41szPwHNnUiTKARetTRBAfQ63peJqqOEr9cyP7WZp0NbR9Tld720ro7jfyzo6Y0q1S9b7sszKpr3bhiH0tg1hkmObVcBbbmMBECHTjcFtakRaCQryzF7nEDUQZk.vKcLYgdeZnUJra7e0yMjFXKP_cjlSrt_0dXOwkVt0DvPpPD5wUvCgRo5znEtbRrTVDKbiLOV2otnx1ybNPCMCvI4H3ypf_TNGxEGZ/_ylt=A2RCCbgKQCJagicAM7SDTwx.;_ylu=X3oDMTEycmhzazExBHBvcwMxBHNlYwNzcgRzbGsDdGl0bGUEdnRpZANqcDAwNDA-/SIG=14cfpb8sh/EXP=1512294858/**https%3A//ja.wikipedia.org/wiki/%25E3%2583%25A1%25E3%2582%25A4%25E3%2583%25B3%25E3%2583%259A%25E3%2583%25BC%25E3%2582%25B8 HTTP/1.1
> Host: search.yahoo.co.jp
> Accept: */*
> Connection: keep-alive
> Referer: https://search.yahoo.co.jp
> User-agent: Mozilla/5.0 AppleWebKit/537
> 
* Recv failure: Connection reset by peer
* Closing connection 0
curl: (56) Recv failure: Connection reset by peer

---
joshua_shanghai@sina.com
