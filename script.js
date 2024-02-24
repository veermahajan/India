var x = document.getElementById("anthem");

function begin(){
  alert("Please stand up. The national anthem is about to play.");
  alert("You may not pause the national anthem as it is playing.");
  x.play();
  document.getElementById("mainBlock").innerHTML = "<p>जन-गण-मन अधिनायक जय हे, भारत भाग्य विधाता!<br> पंजाब-सिंधु-गुजरात-मराठा, द्राविड़-उत्कल-बंग<br> विन्ध्य हिमाचल यमुना गंगा, उच्छल जलधि तरंग<br> तव शुभ नामे जागे, तव शुभाशीष मागे<br> गाहे तव जय गाथा।<br>जन-गण-मंगलदायक जय हे, भारत भाग्य विधाता!<br>जय हे! जय हे! जय हे! जय जय जय जय हे!</p>";
  setTimeout(function(){
    alert("You may now sit down.");
  }, 73000);
  document.getElementById("beginButton").innerHTML = "Next";
  document.getElementById("beginButton").onclick = function(){
    next1();
  };
}

function next1(){
  document.getElementById("mainBlock").innerHTML = "";
  alert("This is the next stage. We will now learn about some of Bharat's martyrs.");
  document.getElementById("beginButton").innerHTML = "Bhagat Singh";
  document.getElementById("beginButton").onclick = function(){
    bhagatsingh();
  };
}

function bhagatsingh(){
  alert("Read below about Amar Shaheed Bhagat Singh.");
  document.getElementById("mainBlock").innerHTML = "Bhagat Singh (1907-1931) was a fearless Indian freedom fighter and revolutionary who played a pivotal role in the country's struggle for independence from British rule. Born in a patriotic family, Singh was deeply influenced by the Jallianwala Bagh massacre and committed himself to the cause of freeing India from colonial oppression. His daring acts, including the protest against the Simon Commission and the Lahore Conspiracy Case, showcased his unwavering courage. Singh's sacrifice reached its pinnacle when he willingly embraced the gallows at the young age of 23, along with Rajguru and Sukhdev, leaving an indelible mark on India's history as a symbol of selfless devotion to the motherland.<br><br>भगत सिंह (1907-1931) एक निडर भारतीय स्वतंत्रता सेनानी और क्रांतिकारी थे जो देश को ब्रिटिश शासन से मुक्ति प्राप्त करने के लिए महत्वपूर्ण भूमिका निभाए। एक राष्ट्रभक्त परिवार में जन्मे, सिंह को जलियांवाला बाग का क्रूरता ने गहरा प्रभाव डाला और उन्होंने भारत को उपनिवेशी उत्पीड़न से मुक्त करने का संकल्प लिया। उनके दिलेराना कर्म, जैसे कि साइमन कमीशन के खिलाफ प्रतिष्ठान और लाहौर साजिश केस, ने उनके अडिग साहस को प्रदर्शित किया। सिंह की बलिदानी भूमिका ने उसकी श्रद्धांजलि तक पहुंच ली जब उन्होंने 23 वर्ष की आयु में राजगुरु और सुखदेव के साथ फांसी को गले लगाने का साहस दिखाया, जिसने उन्हें मातृभूमि के प्रति अद्वितीय समर्पण का प्रतीक बना दिया।";
}
