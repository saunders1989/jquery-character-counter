(function($) {
  $.fn.characterCounter = function() {
    return this.each(function() {
      var $this = $(this);
      var max_length = $this.data("max-length");
      if ($this.next(".character_counter").length > 0) { return; }
      var counter_label = $("<p class='character_counter'></p>");
      $this.after(counter_label);

      function updateCount(charCount) {
        counter_label.text(max_length - charCount);
        counter_label.toggleClass("invalid", (max_length - charCount) < 0);
      }

      updateCount($this.val().length);

      $this.bind('keyup', function() {
        updateCount($(this).val().length);
      });
    });
  };
})(jQuery);