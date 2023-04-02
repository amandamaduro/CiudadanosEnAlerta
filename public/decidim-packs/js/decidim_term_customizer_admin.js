/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js ***!
  \****************************************************************************/
/***/ (function(module) {

var e,t;e=this,t=function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){return"string"==typeof e?document.querySelector(e):e()},a=function(e,t){var n="string"==typeof e?document.createElement(e):e;for(var r in t){var i=t[r];if("inside"===r)i.append(n);else if("dest"===r)u(i[0]).insertAdjacentElement(i[1],n);else if("around"===r){var o=i;o.parentNode.insertBefore(n,o),n.append(o),null!=o.getAttribute("autofocus")&&o.focus()}else r in n?n[r]=i:n.setAttribute(r,i)}return n},c=function(e,t){return e=String(e).toLowerCase(),t?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):e},l=function(e,n){return a("mark",t({innerHTML:e},"string"==typeof n&&{class:n})).outerHTML},f=function(e,t){t.input.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t.feedback,cancelable:!0}))},p=function(e,t,n){var r=n||{},i=r.mode,o=r.diacritics,s=r.highlight,u=c(t,o);if(t=String(t),e=c(e,o),"loose"===i){var a=(e=e.replace(/ /g,"")).length,f=0,p=Array.from(t).map((function(t,n){return f<a&&u[n]===e[f]&&(t=s?l(t,s):t,f++),t})).join("");if(f===a)return p}else{var d=u.indexOf(e);if(~d)return e=t.substring(d,d+e.length),d=s?t.replace(e,l(e,s)):t}},d=function(e,t){return new Promise((function(n,r){var i;return(i=e.data).cache&&i.store?n():new Promise((function(e,n){return"function"==typeof i.src?i.src(t).then(e,n):e(i.src)})).then((function(t){try{return e.feedback=i.store=t,f("response",e),n()}catch(e){return r(e)}}),r)}))},h=function(e,t){var n=t.data,r=t.searchEngine,i=[];n.store.forEach((function(s,u){var a=function(n){var o=n?s[n]:s,u="function"==typeof r?r(e,o):p(e,o,{mode:r,diacritics:t.diacritics,highlight:t.resultItem.highlight});if(u){var a={match:u,value:s};n&&(a.key=n),i.push(a)}};if(n.keys){var c,l=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,s=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw s}}}}(n.keys);try{for(l.s();!(c=l.n()).done;)a(c.value)}catch(e){l.e(e)}finally{l.f()}}else a()})),n.filter&&(i=n.filter(i));var s=i.slice(0,t.resultsList.maxResults);t.feedback={query:e,matches:i,results:s},f("results",t)},m="aria-expanded",b="aria-activedescendant",y="aria-selected",v=function(e,n){e.feedback.selection=t({index:n},e.feedback.results[n])},g=function(e){e.isOpen||((e.wrapper||e.input).setAttribute(m,!0),e.list.removeAttribute("hidden"),e.isOpen=!0,f("open",e))},w=function(e){e.isOpen&&((e.wrapper||e.input).setAttribute(m,!1),e.input.setAttribute(b,""),e.list.setAttribute("hidden",""),e.isOpen=!1,f("close",e))},O=function(e,t){var n=t.resultItem,r=t.list.getElementsByTagName(n.tag),o=!!n.selected&&n.selected.split(" ");if(t.isOpen&&r.length){var s,u,a=t.cursor;e>=r.length&&(e=0),e<0&&(e=r.length-1),t.cursor=e,a>-1&&(r[a].removeAttribute(y),o&&(u=r[a].classList).remove.apply(u,i(o))),r[e].setAttribute(y,!0),o&&(s=r[e].classList).add.apply(s,i(o)),t.input.setAttribute(b,r[t.cursor].id),t.list.scrollTop=r[e].offsetTop-t.list.clientHeight+r[e].clientHeight+5,t.feedback.cursor=t.cursor,v(t,e),f("navigate",t)}},A=function(e){O(e.cursor+1,e)},k=function(e){O(e.cursor-1,e)},L=function(e,t,n){(n=n>=0?n:e.cursor)<0||(e.feedback.event=t,v(e,n),f("selection",e),w(e))};function j(e,n){var r=this;return new Promise((function(i,o){var s,u;return s=n||((u=e.input)instanceof HTMLInputElement||u instanceof HTMLTextAreaElement?u.value:u.innerHTML),function(e,t,n){return t?t(e):e.length>=n}(s=e.query?e.query(s):s,e.trigger,e.threshold)?d(e,s).then((function(n){try{return e.feedback instanceof Error?i():(h(s,e),e.resultsList&&function(e){var n=e.resultsList,r=e.list,i=e.resultItem,o=e.feedback,s=o.matches,u=o.results;if(e.cursor=-1,r.innerHTML="",s.length||n.noResults){var c=new DocumentFragment;u.forEach((function(e,n){var r=a(i.tag,t({id:"".concat(i.id,"_").concat(n),role:"option",innerHTML:e.match,inside:c},i.class&&{class:i.class}));i.element&&i.element(r,e)})),r.append(c),n.element&&n.element(r,o),g(e)}else w(e)}(e),c.call(r))}catch(e){return o(e)}}),o):(w(e),c.call(r));function c(){return i()}}))}var S=function(e,t){for(var n in e)for(var r in e[n])t(n,r)},T=function(e){var n,r,i,o=e.events,s=(n=function(){return j(e)},r=e.debounce,function(){clearTimeout(i),i=setTimeout((function(){return n()}),r)}),u=e.events=t({input:t({},o&&o.input)},e.resultsList&&{list:o?t({},o.list):{}}),a={input:{input:function(){s()},keydown:function(t){!function(e,t){switch(e.keyCode){case 40:case 38:e.preventDefault(),40===e.keyCode?A(t):k(t);break;case 13:t.submit||e.preventDefault(),t.cursor>=0&&L(t,e);break;case 9:t.resultsList.tabSelect&&t.cursor>=0&&L(t,e);break;case 27:t.input.value="",w(t)}}(t,e)},blur:function(){w(e)}},list:{mousedown:function(e){e.preventDefault()},click:function(t){!function(e,t){var n=t.resultItem.tag.toUpperCase(),r=Array.from(t.list.querySelectorAll(n)),i=e.target.closest(n);i&&i.nodeName===n&&L(t,e,r.indexOf(i))}(t,e)}}};S(a,(function(t,n){(e.resultsList||"input"===n)&&(u[t][n]||(u[t][n]=a[t][n]))})),S(u,(function(t,n){e[t].addEventListener(n,u[t][n])}))};function E(e){var n=this;return new Promise((function(r,i){var o,s,u;if(o=e.placeHolder,u={role:"combobox","aria-owns":(s=e.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},a(e.input,t(t({"aria-controls":s.id,"aria-autocomplete":"both"},o&&{placeholder:o}),!e.wrapper&&t({},u))),e.wrapper&&(e.wrapper=a("div",t({around:e.input,class:e.name+"_wrapper"},u))),s&&(e.list=a(s.tag,t({dest:[s.destination,s.position],id:s.id,role:"listbox",hidden:"hidden"},s.class&&{class:s.class}))),T(e),e.data.cache)return d(e).then((function(e){try{return c.call(n)}catch(e){return i(e)}}),i);function c(){return f("init",e),r()}return c.call(n)}))}function x(e){var t=e.prototype;t.init=function(){E(this)},t.start=function(e){j(this,e)},t.unInit=function(){if(this.wrapper){var e=this.wrapper.parentNode;e.insertBefore(this.input,this.wrapper),e.removeChild(this.wrapper)}var t;S((t=this).events,(function(e,n){t[e].removeEventListener(n,t.events[e][n])}))},t.open=function(){g(this)},t.close=function(){w(this)},t.goTo=function(e){O(e,this)},t.next=function(){A(this)},t.previous=function(){k(this)},t.select=function(e){L(this,null,e)},t.search=function(e,t,n){return p(e,t,n)}}return function e(t){this.options=t,this.id=e.instances=(e.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(e){var t=e.name,r=e.options,i=e.resultsList,o=e.resultItem;for(var s in r)if("object"===n(r[s]))for(var a in e[s]||(e[s]={}),r[s])e[s][a]=r[s][a];else e[s]=r[s];e.selector=e.selector||"#"+t,i.destination=i.destination||e.selector,i.id=i.id||t+"_list_"+e.id,o.id=o.id||t+"_result",e.input=u(e.selector)}(this),x.call(this,e),E(this)}}, true?module.exports=t():0;


/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/entrypoints/decidim_term_customizer_admin.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/entrypoints/decidim_term_customizer_admin.js ***!
  \********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_term_customizer_admin_multifield_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/term_customizer/admin/multifield/component */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/multifield/component.js");
/* harmony import */ var src_decidim_term_customizer_admin_constraint_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/term_customizer/admin/constraint_fields */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/constraint_fields.js");
/* harmony import */ var src_decidim_term_customizer_admin_constraint_fields__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_decidim_term_customizer_admin_constraint_fields__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_decidim_term_customizer_admin_translation_sets_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/term_customizer/admin/translation_sets_admin */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/translation_sets_admin.js");
/* harmony import */ var src_decidim_term_customizer_admin_translation_sets_admin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_decidim_term_customizer_admin_translation_sets_admin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_decidim_term_customizer_admin_translations_admin_bulk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/term_customizer/admin/translations_admin_bulk */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/translations_admin_bulk.js");
/* harmony import */ var src_decidim_term_customizer_admin_translations_admin_bulk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_decidim_term_customizer_admin_translations_admin_bulk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_decidim_term_customizer_admin_translations_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/term_customizer/admin/translations_admin */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/translations_admin.js");


// import "app/packs/src/decidim/term_customizer/admin/multifield"




/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/constraint_fields.js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/constraint_fields.js ***!
  \******************************************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var initConstraintFields = function initConstraintFields($section) {
    var $select = $("select.constraint-subject-selector", $section);
    var $modelSelect = $("select.constraint-subject-model-selector", $section);
    $select.on("change init", /* @this HTMLElement */
    function () {
      var val = $(this).val();
      $("[data-manifest]", $section).hide();
      $("[data-manifest=\"".concat(val, "\"]"), $section).show();
    }).trigger("init");
    $modelSelect.on("change init", /* @this HTMLElement */
    function () {
      var $container = $(this).parents(".manifest-container");
      var val = $(this).val();
      $("[data-components]", $container).hide();
      $("[data-components=\"".concat(val, "\"]"), $container).show();
    }).trigger("init");
  };
  $.fn.constraintSection = function () {
    $(this).each(
    /**
     * @this HTMLElement
     * @return {void}
     */
    function () {
      var $section = $(this);
      initConstraintFields($section);
    });
  };
});

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/multifield/component.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/multifield/component.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/auto_label_by_position.component */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-admin-0.27.2/app/packs/src/decidim/admin/auto_label_by_position.component.js");
/* harmony import */ var src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/auto_buttons_by_position.component */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-admin-0.27.2/app/packs/src/decidim/admin/auto_buttons_by_position.component.js");
/* harmony import */ var src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/dynamic_fields.component */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-admin-0.27.2/app/packs/src/decidim/admin/dynamic_fields.component.js");
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-admin-0.27.2/app/packs/src/decidim/admin/sort_list.component.js");




$(function () {
  var initMultifield = function initMultifield($wrapper) {
    var wrapperSelector = "#".concat($wrapper.attr("id"));
    var placeholderId = $wrapper.data("placeholder-id");
    var fieldSelector = ".multifield-field";
    var autoLabelByPosition = new src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
      listSelector: "".concat(wrapperSelector, " .multifield-field:not(.hidden)"),
      labelSelector: ".card-title span:first",
      onPositionComputed: function onPositionComputed(el, idx) {
        $(el).find("input.position-input").val(idx);
      }
    });
    var autoButtonsByPosition = new src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_1__["default"]({
      listSelector: "".concat(wrapperSelector, " .multifield-field:not(.hidden)"),
      hideOnFirstSelector: ".move-up-field",
      hideOnLastSelector: ".move-down-field"
    });
    var createSortableList = function createSortableList() {
      (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__["default"])("".concat(wrapperSelector, " .fields-list:not(.published)"), {
        handle: ".multifield-field-divider",
        placeholder: '<div style="border-style: dashed; border-color: #000"></div>',
        forcePlaceholderSize: true,
        onSortUpdate: function onSortUpdate() {
          autoLabelByPosition.run();
        }
      });
    };
    var hideDeletedSection = function hideDeletedSection($target) {
      var inputDeleted = $target.find("input[name$=\\[deleted\\]]").val();
      if (inputDeleted === "true") {
        $target.addClass("hidden");
        $target.hide();
      }
    };
    (0,src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__["default"])({
      placeholderId: placeholderId,
      wrapperSelector: wrapperSelector,
      containerSelector: ".multifield-fields-list",
      fieldSelector: fieldSelector,
      addFieldButtonSelector: ".add-field",
      removeFieldButtonSelector: ".remove-field",
      moveUpFieldButtonSelector: ".move-up-field",
      moveDownFieldButtonSelector: ".move-down-field",
      onAddField: function onAddField($newField) {
        createSortableList();
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
        $wrapper.trigger("add-field-section", $newField);
      },
      onRemoveField: function onRemoveField() {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      },
      onMoveUpField: function onMoveUpField() {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      },
      onMoveDownField: function onMoveDownField() {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      }
    });
    createSortableList();
    $(fieldSelector).each(function (idx, el) {
      var $target = $(el);
      hideDeletedSection($target);
    });
    autoLabelByPosition.run();
    autoButtonsByPosition.run();
  };
  $.fn.multifield = function () {
    $(this).each(
    /**
     * @this HTMLElement
     * @return {void}
     */
    function () {
      var $elem = $(this);
      var id = $elem.attr("id");
      if (!id || id.length < 1) {
        id = "multifield-".concat(Math.random().toString(16).slice(2));
        $elem.attr("id", id);
      }
      initMultifield($elem);
    });
  };
});

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/translation_sets_admin.js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/translation_sets_admin.js ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $fields = $("form.translation-sets-form .multifield-fields");
  $fields.multifield();
  $fields.on("add-field-section", /* @this HTMLElement */
  function (ev, newField) {
    $(newField).constraintSection();
  });
  $(".constraints-list .constraint-section", $fields).each(function (_i, el) {
    $(el).constraintSection();
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/translations_admin.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/translations_admin.js ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/autocomplete */ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.2/app/packs/src/decidim/autocomplete.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

$(function () {
  var searchInput = document.getElementById("tc-autocomplete");
  var resultsElement = document.getElementById("add-translations-results");
  var template = resultsElement.querySelector("template");
  var form = searchInput.closest("form");
  var searchUrl = new URL(form.getAttribute("action"), window.location.origin);
  var currentSearch = "";
  var selectedTerms = [];
  searchInput.addEventListener("keyup", function () {
    currentSearch = searchInput.value;
  });

  // Prevent accidental submit on the autocomplete field
  form.addEventListener("submit", function (ev) {
    return ev.preventDefault();
  });
  var dataSource = function dataSource(query, callback) {
    var baseParams = Object.fromEntries(searchUrl.searchParams.entries());
    var params = new URLSearchParams(_objectSpread(_objectSpread({}, baseParams), {}, {
      term: query
    }));
    fetch("".concat(searchUrl.pathname, "?").concat(params.toString()), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      callback(data);
    });
  };

  // Just to avoid the "no-new" ESLint issue, wrap this in a function
  var initiate = function initiate() {
    var config = JSON.parse(searchInput.dataset.autocomplete);
    return new src_decidim_autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"](searchInput, {
      name: searchInput.getAttribute("name"),
      placeholder: searchInput.getAttribute("placeholder"),
      searchPrompt: true,
      searchPromptText: config.searchPromptText,
      threshold: 3,
      dataMatchKeys: ["label"],
      modifyResult: function modifyResult(item, valueItem) {
        var sanitizedSearch = currentSearch.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
        var re = new RegExp("(".concat(sanitizedSearch, ")"), "gi");
        var replacedText = item.textContent.replace(re, '<strong class="search-highlight">$1</strong>');
        item.innerHTML = replacedText;
        item.dataset.value = valueItem.value;
      },
      dataSource: dataSource
    });
  };

  // Method for hiding the currently selected items
  var hideSelectedItems = function hideSelectedItems() {
    var resultsList = searchInput.nextSibling;
    var _iterator = _createForOfIteratorHelper(resultsList.querySelectorAll("li")),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var resultItem = _step.value;
        if (selectedTerms.indexOf(resultItem.dataset.value) < 0) {
          resultItem.classList.remove("hide");
        } else {
          resultItem.classList.add("hide");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  initiate();

  // Currently not possible in Decidim to get notified when the list is
  // modified, so hack it with a MutationObserver.
  // Create an observer instance linked to the callback function
  var observer = new MutationObserver(function () {
    hideSelectedItems();
  });
  observer.observe(searchInput.nextSibling, {
    childList: true
  });

  // Hide the already selected items when the input is opened
  // Handle the selection of an item
  searchInput.addEventListener("selection", function (ev) {
    var selection = ev.detail.selection;
    var selectedItem = selection.value;
    var newRow = template.content.cloneNode(true).querySelector("tr");
    newRow.innerHTML = newRow.innerHTML.replace(new RegExp("{{translation_key}}", "g"), selectedItem.value);
    newRow.innerHTML = newRow.innerHTML.replace(new RegExp("{{translation_term}}", "g"), selectedItem.label);
    var targetTable = resultsElement.querySelector("table tbody");
    targetTable.appendChild(newRow);
    resultsElement.classList.remove("hide");

    // Add it to the selected elements and hide the selected item
    selectedTerms.push(selectedItem.value);
    hideSelectedItems();

    // Listen to the click event on the remove button
    newRow.querySelector(".remove-translation-key").addEventListener("click", function (removeEv) {
      removeEv.preventDefault();
      newRow.parentNode.removeChild(newRow);
      selectedTerms = selectedTerms.filter(function (item) {
        return item !== selectedItem.value;
      });
      hideSelectedItems();
      if (targetTable.querySelectorAll("tr").length < 1) {
        resultsElement.classList.add("hide");
      }
    });
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/translations_admin_bulk.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/src/decidim/term_customizer/admin/translations_admin_bulk.js ***!
  \************************************************************************************************************************************************************************************/
/***/ (function() {

/* eslint-disable no-invalid-this */
$(document).ready(function () {
  var selectedTranslationsCount = function selectedTranslationsCount() {
    return $(".table-list .js-check-all-translation:checked").length;
  };
  window.selectedTranslationsCountUpdate = function () {
    if (selectedTranslationsCount() === 0) {
      $("#js-selected-translation-count").text("");
    } else {
      $("#js-selected-translation-count").text(selectedTranslationsCount());
    }
  };
  var showBulkActionsButton = function showBulkActionsButton() {
    if (selectedTranslationsCount() > 0) {
      $("#js-bulk-actions-button").removeClass("hide");
    }
  };
  var hideBulkActionsButton = function hideBulkActionsButton() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (selectedTranslationsCount() === 0 || force === true) {
      $("#js-bulk-actions-button").addClass("hide");
      $("#js-bulk-actions-dropdown").removeClass("is-open");
    }
  };
  window.showOtherActionsButtons = function () {
    $("#js-other-actions-wrapper").removeClass("hide");
  };
  var hideOtherActionsButtons = function hideOtherActionsButtons() {
    $("#js-other-actions-wrapper").addClass("hide");
  };
  window.hideBulkActionForms = function () {
    return $(".js-bulk-action-form").addClass("hide");
  };
  if ($(".js-bulk-action-form").length) {
    window.hideBulkActionForms();
    $("#js-bulk-actions-button").addClass("hide");
    $("#js-bulk-actions-dropdown ul li button").click(function (ev) {
      ev.preventDefault();
      var action = $(ev.target).data("action");
      if (action) {
        $("#js-form-".concat(action)).submit(function () {
          $(".layout-content > .callout-wrapper").html("");
        });
        $("#js-".concat(action, "-actions")).removeClass("hide");
        hideBulkActionsButton(true);
        hideOtherActionsButtons();
      }
    });

    // select all checkboxes
    $(".js-check-all").change(function () {
      $(".js-check-all-translation").prop("checked", $(this).prop("checked"));
      if ($(this).prop("checked")) {
        $(".js-check-all-translation").closest("tr").addClass("selected");
        showBulkActionsButton();
      } else {
        $(".js-check-all-translation").closest("tr").removeClass("selected");
        hideBulkActionsButton();
      }
      window.selectedTranslationsCountUpdate();
    });

    // translation checkbox change
    $(".table-list").on("change", ".js-check-all-translation", function () {
      var translationId = $(this).val();
      var checked = $(this).prop("checked");

      // uncheck "select all", if one of the listed checkbox item is unchecked
      if ($(this).prop("checked") === false) {
        $(".js-check-all").prop("checked", false);
      }
      // check "select all" if all checkbox translations are checked
      if ($(".js-check-all-translation:checked").length === $(".js-check-all-translation").length) {
        $(".js-check-all").prop("checked", true);
        showBulkActionsButton();
      }
      if ($(this).prop("checked")) {
        showBulkActionsButton();
        $(this).closest("tr").addClass("selected");
      } else {
        hideBulkActionsButton();
        $(this).closest("tr").removeClass("selected");
      }
      if ($(".js-check-all-translation:checked").length === 0) {
        hideBulkActionsButton();
      }
      $(".js-bulk-action-form").find(".js-translation-id-".concat(translationId)).prop("checked", checked);
      window.selectedTranslationCountUpdate();
    });
    $(".js-cancel-bulk-action").on("click", function () {
      window.hideBulkActionForms();
      showBulkActionsButton();
      window.showOtherActionsButtons();
    });
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"decidim_term_customizer_admin": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktavarandu"] = self["webpackChunktavarandu"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html5sortable_dist_html5sortable_es_js","_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-core-0_27_2_app_packs_src_decidim_auto-961160","_rbenv_versions_3_0_2_lib_ruby_gems_3_0_0_gems_decidim-admin-0_27_2_app_packs_src_decidim_adm-ee1f76"], function() { return __webpack_require__("../.rbenv/versions/3.0.2/lib/ruby/gems/3.0.0/bundler/gems/decidim-module-term_customizer-5a8d4c67972e/app/packs/entrypoints/decidim_term_customizer_admin.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=decidim_term_customizer_admin.js.map