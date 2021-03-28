"use strict";
$(function () {
  AOS.init();
  //ハンバーガー
  $("#hamburger").click(function () {
    // .header-navが非表示であれば、フェードインし、表示されていれば、フェードアウトする
    $(".header__nav").fadeToggle();
    // #hamburgerにactiveクラスがあれば削除し、なければ追加する
    $(this).toggleClass("active");
    // bodyにactiveクラスがあれば削除し、なければ追加する
    $("body").toggleClass("hidden");
  });

  $(".nav-button").click(function () {
    $(".header__nav").fadeToggle();
    // #hamburgerにactiveクラスがあれば削除し、なければ追加する
    $("#hamburger").toggleClass("active");
    // bodyにactiveクラスがあれば削除し、なければ追加する
    $("body").toggleClass("hidden");
  });

  //アコーディオン

  $(".question__box > .question__qanda:not(:first-child) .answer").css(
    "display",
    "none"
  );

  // 十字の向きを変える
  $(".question__q").click(function () {
    $(this).toggleClass("open").next().slideToggle(300);
  });
  //

  //header
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $(".header").addClass("fix");
    } else {
      $(".header").removeClass("fix");
    }
  });
  //

  //スムーススクロール

  $('a[href^="#"]').click(function () {
    // スクロールの速度
    let speed = 400; // ミリ秒で記述
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

//メールの送信

function submitForm(e) {
  var itemResponses = e.response.getItemResponses();
  var message = "";

  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    var question = itemResponse.getItem().getTitle();
    var answer = itemResponse.getResponse();

    if (question == "お名前") {
      var username = answer;
    }
    if (question == "メールアドレス") {
      var usermail = answer;
    }
    if (question == "お好きなプログラミング言語") {
      var lang = answer;
    }
    if (question == "自由記述") {
      var freetxt = answer;
    }

    message += (i + 1).toString() + ". " + question + ": " + answer + "\n";
  }

  /* 管理者宛メール送信設定 */
  var address = "surukazu29@gmail.com";
  var title = "[お問合せを受信しました]";
  var content =
    "下記の内容で、お問合せを受信しました。\n\n" +
    message +
    "\n\n" +
    "※このメールはGoogleフォームからの自動送信メールです。";
  var options = { from: "surukazu29@gmail.com", replyTo: usermail };

  GmailApp.sendEmail(address, title, content, options);

  /* ユーザー宛メール送信設定 */
  var title2 = "[お問合せを受付けました]";
  var content2 =
    username +
    " 様\n\n" +
    "この度は、お問合せいただき、ありがとうございます。\n" +
    "下記の内容で、受付けました。\n" +
    "後ほど折り返しご連絡させていただきますので、いましばらくお待ちください。\n\n" +
    message +
    "\n\n" +
    "----------\n" +
    "shogo web creating\n" +
    "https://shogo141.work" +
    "\n\n※このメールはGoogleフォームからの自動送信メールです。";
  var options2 = {
    from: "youraddress@gmail.com",
    name: "shogo web creatingお問合せフォーム",
  };

  GmailApp.sendEmail(usermail, title2, content2, options2);
}
$(document).ready(function () {

  const $submitBtn = $('.contact__submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});