/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtDiagram"], function($oj$$39$$, $$$$36$$, $comp$$8$$, $base$$7$$, $dvt$$4$$) {
  $oj$$39$$.$__registerWidget$("oj.ojDiagram", $$$$36$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_Render$:function($isResize$$1$$) {
    this.options._logger = $oj$$39$$.$Logger$;
    this.options._templateFunction && (this.options.renderer = this.$_getTemplateRenderer$(this.options._templateFunction));
    this.options.renderer && (this.options._contextHandler = this.$_getContextHandler$());
    return this._super($isResize$$1$$);
  }, $_getTemplateRenderer$:function($templateFunction$$) {
    var $thisRef$$ = this;
    return function($context$$113_elem$$92$$) {
      var $dummyDiv$$2$$ = document.createElement("div");
      $dummyDiv$$2$$.style.display = "none";
      $dummyDiv$$2$$.$_dvtcontext$ = $thisRef$$.$_context$;
      $thisRef$$.element.append($dummyDiv$$2$$);
      $templateFunction$$({parentElement:$dummyDiv$$2$$, data:$context$$113_elem$$92$$.data});
      return($context$$113_elem$$92$$ = $dummyDiv$$2$$.children[0]) && "http://www.w3.org/2000/svg" === $context$$113_elem$$92$$.namespaceURI ? ($dummyDiv$$2$$.removeChild($context$$113_elem$$92$$), $$$$36$$($dummyDiv$$2$$).remove(), $context$$113_elem$$92$$) : $context$$113_elem$$92$$ ? $thisRef$$.$_GetDvtComponent$($context$$113_elem$$92$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$1$$ = this;
    return function($parentElement$$8$$, $rootElement$$, $data$$153$$, $state$$11$$, $previousState$$) {
      return{component:$oj$$39$$.Components.$getWidgetConstructor$($thisRef$$1$$.element), parentElement:$parentElement$$8$$, rootElement:$rootElement$$, data:$data$$153$$, state:$state$$11$$, previousState:$previousState$$, id:$data$$153$$.id, type:"node", label:$data$$153$$.label};
    };
  }, renderDefaultHover:function($context$$115$$) {
    $context$$115$$.previousState && $context$$115$$.state.hovered == $context$$115$$.previousState.hovered || this.$_GetDvtComponent$(this.element).processDefaultHoverEffect($context$$115$$.id, $context$$115$$.state.hovered);
  }, renderDefaultSelection:function($context$$116$$) {
    $context$$116$$.previousState && $context$$116$$.state.selected == $context$$116$$.previousState.selected || this.$_GetDvtComponent$(this.element).processDefaultSelectionEffect($context$$116$$.id, $context$$116$$.state.selected);
  }, renderDefaultFocus:function($context$$117$$) {
    $context$$117$$.previousState && $context$$117$$.state.focused == $context$$117$$.previousState.focused || this.$_GetDvtComponent$(this.element).processDefaultFocusEffect($context$$117$$.id, $context$$117$$.state.focused);
  }, $_CreateDvtComponent$:function($context$$118$$, $callback$$108$$, $callbackObj$$7$$) {
    return $dvt$$4$$.Diagram.newInstance($context$$118$$, $callback$$108$$, $callbackObj$$7$$);
  }, $_ConvertLocatorToSubId$:function($locator$$37$$) {
    var $subId$$42$$ = $locator$$37$$.subId;
    "oj-diagram-link" == $subId$$42$$ ? $subId$$42$$ = "link[" + $locator$$37$$.index + "]" : "oj-diagram-node" == $subId$$42$$ ? $subId$$42$$ = "node[" + $locator$$37$$.index + "]" : "oj-diagram-tooltip" == $subId$$42$$ && ($subId$$42$$ = "tooltip");
    return $subId$$42$$;
  }, $_ConvertSubIdToLocator$:function($subId$$43$$) {
    var $locator$$38$$ = {};
    0 == $subId$$43$$.indexOf("link") ? ($locator$$38$$.subId = "oj-diagram-link", $locator$$38$$.index = this.$_GetFirstIndex$($subId$$43$$)) : 0 == $subId$$43$$.indexOf("node") ? ($locator$$38$$.subId = "oj-diagram-node", $locator$$38$$.index = this.$_GetFirstIndex$($subId$$43$$)) : "tooltip" == $subId$$43$$ && ($locator$$38$$.subId = "oj-diagram-tooltip");
    return $locator$$38$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$.push("oj-diagram");
    return $styleClasses$$10$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$["oj-diagram-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-diagram-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$11$$["oj-diagram-node oj-hover"] = [{path:"styleDefaults/nodeDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/nodeDefaults/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-diagram-link"] = {path:"styleDefaults/linkDefaults/color", property:"color"};
    $styleClasses$$11$$["oj-diagram-link-label"] = {path:"styleDefaults/linkDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-diagram-link oj-selected"] = {path:"styleDefaults/linkDefaults/selectionColor", property:"border-color"};
    $styleClasses$$11$$["oj-diagram-link oj-hover"] = [{path:"styleDefaults/linkDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/linkDefaults/hoverInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$11$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$14$$ = this.options.translations, $ret$$41$$ = this._super();
    $ret$$41$$["DvtUtilBundle.DIAGRAM"] = $translations$$14$$.componentName;
    return $ret$$41$$;
  }, getNodeCount:function() {
    return this.$_component$.getAutomation().getNodeCount();
  }, getNode:function($nodeIndex$$) {
    return this.$_component$.getAutomation().getNode($nodeIndex$$);
  }, getLinkCount:function() {
    return this.$_component$.getAutomation().getLinkCount();
  }, getLink:function($linkIndex$$) {
    return this.$_component$.getAutomation().getLink($linkIndex$$);
  }, getContextByNode:function($context$$119_node$$96$$) {
    return($context$$119_node$$96$$ = this.getSubIdByNode($context$$119_node$$96$$)) && "oj-diagram-tooltip" !== $context$$119_node$$96$$.subId ? $context$$119_node$$96$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes", "links"]};
  }});
});
