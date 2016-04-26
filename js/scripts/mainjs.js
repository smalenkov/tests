$(function () {
  var str = "СПЕЦПРЕДЛОЖЕНИЯ ДЕЙСТВУЮЩИЕ ТОЛЬКО НА СТЕНДЕ:";

  var Man = function (name, years, sex) {
    this.name = name;
    this.years = years;
    this.sex = sex;
  };

  var Man1 = new Man("Николай", 13, "men");

//  $("strong", "#mainp").html(Oleg.name);
  function printif() {
    if (Man1.name) {
      $("#mainp > strong").html(Man1.name);
      $("#mainp > strong").css({"font-size": "24px", "margin-bottom": "10px", "display": "block"});
    } else {
      $("#mainp > strong").html(str.toLowerCase());
    }
  }

  $("button").bind("click", function () {
    printif();
    $(this).remove();
  });

  $.get(
    "ajaxload.php", toJson
  );

  function toJson(data) {
    jsonobj = $.parseJSON(data);
    toJsonnext(jsonobj);
  }

  function toJsonnext(obj) {
    var i = 0;
    for (; i < obj.length; i++) {
      $("#news").append("<button>");
    }
    i = 0;
    $("#news button").each(function () {
      $(this).text(obj[i][1]);
      $(this).wrap("<form>");
      $(this).parent().attr("action", "#/" + obj[i][0]);
      i++
    });
  }


  //;(function ($) {
    var app = $.sammy(function () {

      //bind('#mainp', function(e, data) {
      //  this.redirect('#/');
      //});

      this.get('#/voronezh', function () {
        $.get(
          "ajaxloadtext.php",
          {
            nameen: "voronezh"
          },
          onAjaxSuccess
        );
      });

      this.get('#/vorkuta', function () {
        $.get(
          "ajaxloadtext.php",
          {
            nameen: "vorkuta"
          },
          onAjaxSuccess
        );
      });

      this.get('#/vladimir', function () {
        $.get(
          "ajaxloadtext.php",
          {
            nameen: "vladimir"
          },
          onAjaxSuccess
        );
      });

      function onAjaxSuccess(data) {
        $("#newstext").html(data);
      }

    });

    $(function () {
      app.run()
    });
  //})(jQuery);

});


