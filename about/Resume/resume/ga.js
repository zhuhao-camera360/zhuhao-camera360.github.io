var _dyweq = _dyweq || [];
_dyweq.push(['_setAccount',window['acc4zpAnalytics']||'log000001']);
_dyweq.push(['_setDomainName',window['dom4zpAnalytics']||'.zhaopin.com']);
if(window['url4zpAnalytics']) _dyweq.push(['_trackPageview',url4zpAnalytics]);
else _dyweq.push(['_trackPageview']);
(function(){
	var dywe = document.createElement('script');
	dywe.type = 'text/javascript'; dywe.async = true;
	dywe.src = 'http://img01.zhaopin.cn/2012/js/dywe.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(dywe, s);
})();

var _gaq = _gaq || [];
_gaq.push(['_setAccount', window['acc4googleAnalytics']||'UA-7874902-2']);
_gaq.push(['_setDomainName',window['dom4googleAnalytics']||'zhaopin.com']);
_gaq.push(['_addOrganic','youdao','q']);
_gaq.push(['_addOrganic','sogou','query']);
_gaq.push(['_addOrganic','soso','w']);
_gaq.push(['_addOrganic','360','q']);
if(window['url4googleAna']) _gaq.push(['_trackPageview',url4googleAna]);
else _gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	//ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function recordOutboundLink(link, category, action) {
	function ed(d,a){var c=encodeURIComponent;return c instanceof Function?(a?encodeURI(d):c(d)):escape(d);}
	try{
		_dywet._getTrackerByName()._trackEvent(category, action);
		try{
			_gat._getTrackerByName()._trackEvent(category, action);
		}catch(err){}
		if(link.target!="_blank") setTimeout('document.location = "' + link.href + '"', 100);
	}catch(err){
		var i=new Image(1,1);
		var e=document.location;
		i.src="http://l.zhaopin.com/track_err.gif?dywee=5("+category+"*"+action+")&dywehn="+ed(e.hostname)+"&dywep="+ed(e.pathname+e.search,true);
	}
}

function dyweTrackEvent(category, action) {
	function ed(d, a) {
		var c = encodeURIComponent;
		return c instanceof Function ? (a ? encodeURI(d) : c(d)) : escape(d);
	}
	try {
		_dywet._getTrackerByName()._trackEvent(category, action);
		try {
			_gat._getTrackerByName()._trackEvent(category, action);
		} catch (err) {
		}
	} catch (err) {
		var i = new Image(1, 1);
		var e = document.location;
		i.src = "http://l.zhaopin.com/track_err.gif?dywee=5(" + category + "*"
				+ action + ")&dywehn=" + ed(e.hostname) + "&dywep="
				+ ed(e.pathname + e.search, true);
	}
}