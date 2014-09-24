/// ==UserScript==
// @name          xvideos downloader
// @namespace     xvideos downloader
// @description	  Allows you to download xvideos without an account
// @author        thingywhat
// @include       http://www.xvideos.com/video*/*
// @version       1
// @grant         none
// ==/UserScript==

window.onload = function(){
    $('[data-ref=tabDownload]').unbind().click(function(){
	location.replace(/flv_url=([^\|]+)/.exec(
	    decodeURIComponent($("#flash-player-embed").attr("flashvars")))[1]);
    });
};
