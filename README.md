# chromium-yahoo-jp-search
make yahoo jp search work from china

To use yahoo jp search from china, do the following steps:

1. add the following entries to your hosts file. 

183.79.250.251 search.yahoo.co.jp
182.22.25.252  s.yimg.jp
183.79.249.252 b11.yahoo.co.jp

the hosts file is in /etc/ on Linux, normally in c:\windows\system32\ on windows,
and /private/etc/ on mac.

2. from chromium browser, enter chromium://extensions and hit return key. then click "Load unpacked extension ..." and follow the UI to load this extension.

---
joshua_shanghai@sina.com
