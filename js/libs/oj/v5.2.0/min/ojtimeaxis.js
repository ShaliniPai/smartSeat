/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTimeAxis","ojs/ojvalidation-datetime"],function(e,t,r,o,n){var a={properties:{converter:{type:"object",value:"{\r           \"default\": null,\r           \"seconds\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit', 'second': '2-digit'}),\r           \"minutes\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit'}),\r           \"hours\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric'}),\r           \"days\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}),\r           \"weeks\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}),\r           \"months\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}),\r           \"quarters\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}),\r           \"years\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'year': 'numeric'})\r         }",properties:{default:{type:"oj.Converter<string>"},seconds:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit, second: 2-digit})"},minutes:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit})"},hours:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric})"},days:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},weeks:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},months:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},quarters:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},years:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year: numeric})"}}},end:{type:"string",value:""},scale:{type:"string",enumValues:["days","hours","minutes","months","quarters","seconds","weeks","years"]},start:{type:"string",value:""},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}}},methods:{refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};e.__registerWidget("oj.ojTimeAxis",t.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{converter:{default:null,seconds:e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),minutes:e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit"}),hours:e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric"}),days:e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),weeks:e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),months:e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),quarters:e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),years:e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"})},start:"",end:"",scale:null},_CreateDvtComponent:function(e,t,r){return n.TimeAxis.newInstance(e,t,r)},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-timeaxis"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-timeaxis-label"]={path:"labelStyle",property:"TEXT"},e},_GetEventTypes:function(){return["optionChange"]},_GetTranslationMap:function(){var e=this.options.translations,t=this._super();return t["DvtUtilBundle.TIMEAXIS"]=e.componentName,t},_GetComponentRendererOptions:function(){return[]},_ProcessOptions:function(){this._super();var e=this,t=function(t){var r=typeof e.options[t];"number"!==r&&"string"!==r&&(e.options[t]=null)};t("start"),t("end")},_LoadResources:function(){null==this.options._resources&&(this.options._resources={});var t=this.options._resources,r=e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME),o=r.createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),n=r.createConverter({hour:"numeric",minute:"2-digit"}),a=r.createConverter({hour:"numeric"}),i=r.createConverter({month:"numeric",day:"2-digit"}),s=r.createConverter({month:"long"}),c=r.createConverter({year:"numeric"}),E=r.createConverter({month:"short"}),v={seconds:o,minutes:n,hours:a,days:i,weeks:i,months:s,quarters:s,years:c},u={seconds:o,minutes:n,hours:a,days:i,weeks:i,months:E,quarters:E,years:r.createConverter({year:"2-digit"})};t.converterFactory=r,t.converter=v,t.converterVert=u,t.axisClass="oj-timeaxis-container",t.axisLabelClass="oj-timeaxis-label",t.axisSeparatorClass="oj-timeaxis-separator",t.borderTopVisible=!1,t.borderRightVisible=!1,t.borderBottomVisible=!1,t.borderLeftVisible=!1,t.firstDayOfWeek=e.LocaleData.getFirstDayOfWeek()}}),a.extension._WIDGET_NAME="ojTimeAxis",e.CustomElementBridge.registerMetadata("oj-time-axis","dvtBaseComponent",a),e.CustomElementBridge.register("oj-time-axis",{metadata:e.CustomElementBridge.getMetadata("oj-time-axis")})});