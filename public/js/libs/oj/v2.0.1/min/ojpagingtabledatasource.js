/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(b){b.bc=function(){};o_("PagingModel",b.bc,b);b.bc.prototype.getPage=function(){};b.b.g("PagingModel.prototype.getPage",{getPage:b.bc.prototype.getPage});b.bc.prototype.setPage=function(){};b.b.g("PagingModel.prototype.setPage",{setPage:b.bc.prototype.setPage});b.bc.prototype.getStartItemIndex=function(){};b.b.g("PagingModel.prototype.getStartItemIndex",{getStartItemIndex:b.bc.prototype.getStartItemIndex});b.bc.prototype.getEndItemIndex=
function(){};b.b.g("PagingModel.prototype.getEndItemIndex",{getEndItemIndex:b.bc.prototype.getEndItemIndex});b.bc.prototype.getPageCount=function(){};b.b.g("PagingModel.prototype.getPageCount",{getPageCount:b.bc.prototype.getPageCount});b.bc.prototype.totalSize=function(){};b.b.g("PagingModel.prototype.totalSize",{totalSize:b.bc.prototype.totalSize});b.bc.prototype.totalSizeConfidence=function(){};b.b.g("PagingModel.prototype.totalSizeConfidence",{totalSizeConfidence:b.bc.prototype.totalSizeConfidence});
b.bc.D={BEFOREPAGE:"beforePage",PAGE:"page",PAGECOUNT:"pageCount"};o_("PagingModel.EventType",b.bc.D,b);b.ka=function(f){if(!(f instanceof b.T))throw Error(b.T.fc._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+b.T.fc._ERR_DATA_INVALID_TYPE_DETAIL);this.tc=f;this.$=0;this.si=-1;this.Init()};o_("PagingTableDataSource",b.ka,b);b.b.ga(b.ka,b.T,"oj.PagingTableDataSource");b.ka.prototype.Init=function(){b.ka.q.Init.call(this)};b.b.g("PagingTableDataSource.prototype.Init",{Init:b.ka.prototype.Init});b.ka.prototype.getWrappedDataSource=
function(){return this.tc};b.b.g("PagingTableDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:b.ka.prototype.getWrappedDataSource});b.ka.prototype.getPage=function(){return"loadMore"==this.pB?0:this.SB()};b.b.g("PagingTableDataSource.prototype.getPage",{getPage:b.ka.prototype.getPage});b.ka.prototype.setPage=function(f,a){a=a||{};f=parseInt(f,10);try{b.ka.q.handleEvent.call(this,b.bc.D.BEFOREPAGE,{page:f,previousPage:this.SB()})}catch(d){return Promise.reject(null)}var c=this.SB();
this.La=null!=a.pageSize?a.pageSize:this.La;a.pageSize=this.La;a.startIndex=f*this.La;this.$=null==a.startIndex?this.$:a.startIndex;this.pB="page";var e=this;return new Promise(function(d,f){0<e.La?e.tc.fetch(a).then(function(a){a.startIndex=0;e.BD(a.data.length);b.ka.q.handleEvent.call(e,b.bc.D.PAGE,{page:e.SB(),previousPage:c});d(null)},function(){e.$=c*e.La;f(null)}):d(null)})};b.b.g("PagingTableDataSource.prototype.setPage",{setPage:b.ka.prototype.setPage});b.ka.prototype.getStartItemIndex=function(){return"loadMore"==
this.pB?0:this.$};b.b.g("PagingTableDataSource.prototype.getStartItemIndex",{getStartItemIndex:b.ka.prototype.getStartItemIndex});b.ka.prototype.getEndItemIndex=function(){return this.si};b.b.g("PagingTableDataSource.prototype.getEndItemIndex",{getEndItemIndex:b.ka.prototype.getEndItemIndex});b.ka.prototype.getPageCount=function(){var b=this.totalSize();return-1==b?-1:Math.ceil(b/this.La)};b.b.g("PagingTableDataSource.prototype.getPageCount",{getPageCount:b.ka.prototype.getPageCount});b.ka.prototype.at=
function(b,a){return this.tc.at(b,a)};b.b.g("PagingTableDataSource.prototype.at",{at:b.ka.prototype.at});b.ka.prototype.fetch=function(b){b=b||{};if(null==b.startIndex)return this.setPage(this.getPage());this.pB="loadMore";this.$=null==b.startIndex?this.$:b.startIndex;var a=null!=b.pageSize?b.pageSize:this.La;b.pageSize=a;b.startIndex=this.$;var d=this;return new Promise(function(c,e){0<a?d.tc.fetch(b).then(function(a){d.BD(a.data.length);c(a)},function(a){e(a)}):c(null)})};b.b.g("PagingTableDataSource.prototype.fetch",
{fetch:b.ka.prototype.fetch});b.ka.prototype.get=function(b,a){return this.tc.get(b,a)};b.b.g("PagingTableDataSource.prototype.get",{get:b.ka.prototype.get});b.ka.prototype.getCapability=function(b){return this.tc.getCapability(b)};b.b.g("PagingTableDataSource.prototype.getCapability",{getCapability:b.ka.prototype.getCapability});b.ka.prototype.on=function(f,a){var d=this,c=this.tc;if(f==b.T.D.SYNC){var e=function(b){d.cga(b,a)};c.on(f,e);return e}if(f==b.T.D.ADD||f==b.T.D.REMOVE||f==b.T.D.CHANGE)return e=
function(b){d.Xfa(b,a)},c.on(f,e),e;if(f==b.T.D.REFRESH||f==b.T.D.RESET)return e=function(b){d.$=0;a(b)},c.on(f,e),e;if(f==b.bc.D.PAGE||f==b.bc.D.PAGECOUNT)b.ka.q.on.call(this,f,a);else c.on(f,a);return a};b.b.g("PagingTableDataSource.prototype.on",{on:b.ka.prototype.on});b.ka.prototype.off=function(f,a){return f==b.bc.D.PAGE||f==b.bc.D.PAGECOUNT?(b.ka.q.off.call(this,f,a),a):this.tc.off(f,a)};b.b.g("PagingTableDataSource.prototype.off",{off:b.ka.prototype.off});b.ka.prototype.sort=function(b){return this.tc.sort(b)};
b.b.g("PagingTableDataSource.prototype.sort",{sort:b.ka.prototype.sort});b.ka.prototype.totalSize=function(){return this.tc.totalSize()};b.b.g("PagingTableDataSource.prototype.totalSize",{totalSize:b.ka.prototype.totalSize});b.ka.prototype.totalSizeConfidence=function(){return this.tc.totalSizeConfidence()};b.b.g("PagingTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:b.ka.prototype.totalSizeConfidence});b.ka.prototype.SB=function(){return 0<this.La?Math.floor(this.$/this.La):0};
b.ka.prototype.Xfa=function(b,a){var d=[],c;for(c=0;c<b.indexes.length;c++){var e=b.indexes[c];void 0!==e&&(e-=this.$,(0>e||e>=this.$+this.La)&&d.push(c))}if(0<d.length)for(d.sort(function(a,b){return a-b}),c=d.length-1;0<=c;c--)b.data.splice(d[c],1),b.indexes.splice(d[c],1),b.keys.splice(d[c],1);this.BD(b.data.length);b.startIndex=this.$;a(b)};b.ka.prototype.cga=function(f,a){f.startIndex!=this.$&&(this.$=f.startIndex);this.BD(f.data.length);if("page"==this.pB){var d={};b.yc.If(d,f);d.startIndex=
0;a(d)}else a(f)};b.ka.prototype.BD=function(b){var a=this.totalSize();0<a?(this.si=this.$+this.La-1,this.si=this.si>a-1?a-1:this.si):this.si=0<b?this.$+b-1:-1};b.ka.D={ADD:"add",REMOVE:"remove",RESET:"reset",SYNC:"sync",REFRESH:"refresh",SORT:"sort"};o_("PagingTableDataSource.EventType",b.ka.D,b)});