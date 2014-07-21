/*
 * simpleprogress
 *
 * A very simple jQuery progressbar
 *
 * Usage: $("#mydiv").simpleprogress();
 *        $("#mydiv").simpleprogress("update", .5);
 *
 * Copyright (c) 2011 Dave McCall (http://dave-mccall.com)
 *
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

(function ($) {
    $.fn.simpleprogress = function (method) {
        var methods = {
            init: function (options) {
                options = $.extend({}, $.fn.simpleprogress.defaults, options);
                this.each(function () {
                    var $this = $(this);
                    $this.addClass("simple-progress").css({ width: options.width, height: options.height }).append($("<div>").addClass("simple-progress-inner"));
                });
                return $(this);
            },
			update: function(percent) {
                console.log("update: " + percent);
				var $this = $(this);
				var width = percent * $this.width() / 100;
				$this.find(".simple-progress-inner").animate({ width: width }, 500).html(percent + "%&nbsp;");
                return $this;
			}
        }
        if (methods[method])
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        else if (typeof method === 'object' || !method)
            return methods["init"].apply(this, arguments);
        else
            $.error("Method " + method + " does not exist");
    };
    $.fn.simpleprogress.defaults = {
		width: 400,
		height: 22,
        percent: 0
    };
})(jQuery);