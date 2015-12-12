var state_arr = new Array("Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal");


  var city = new Array();
      city[0]="";
      city[1]="Bombuflat|Garacharma|Port Blair|Rangat";
      city[2]="Anantapur|Kakinada|Kurnool|Tirupati|Vijayawada|Vizag";
      city[3]="Tawang|Roing|Itanagar|Bomdila|Ziro|Bhalukpong|Pasighat|Namdapha National Park|Anini|Along";
      city[4]="Guwahati|Silchar|Dibrugarh|Jorhat Town|Nagaon|Tinsukia Town|Dhubri|Bongaigaon|Tezpur";
      city[5]="Patna|Gaya|Bhagalpur|Muzaffarpur|Biharsarif|Darbhanga|Purnia";
      city[6]="Ludhiana|Amritsar|Jalandhar|Patiala|Bathinda|S.A.S. Nagar|Hoshiarpur";
      city[7]="Raipur|Durg - Bhilai|Bilaspur|Korba|Rajnandgaon|Raigarh|Jagdalpur|Ambikapur";
      city[8]="Swaminarayan Temple|Dudhni Lake|Deer Park|Island Garden Dadra Park|Vanganga Lake|Vanganga Lake Garden|Church of Our Lady of Piety";
      city[9]="Fort Jerome|Bom Jesus Church|Zampa Gateway|Lighthouse|Jampore Beach|Devka Beach|Gangeshwar Temple";
      city[10]="New Delhi|Firozobad|The oldest city near the site of the Qutab Minar";
      city[11]="Canacona|Mapusa|Margao|Panjim|Ponda|Vasco-da-Gama";
      city[12]="Ahmedabad|Bhavnagar|Dwaraka|Gandhinagar|Surat|Rajkot";
      city[13]="Panchkula|Ambala|Yamunanagar|Kurukshetra|Kaithal|Karnal|Gurgaon";
      city[14]="Shimla|Kasauli|Manali|Kullu|Kinnaur";
      city[15]="Srinagar|Jammu|Anantnag";
      city[16]="Hazaribagh|Jamshedpur|Bokaro|Dumka|Ghorabandha|Gidi";
      city[17]="Bangalore|Belgaum|Mysore|Tumkur|Gulbarga|Bellary|Bijapur";
      city[18]="Thiruvananthapuram|Kochi|Kozhikode|Thrissur|Malappuram|Kollam|Kannur";
      city[19]="Minicoy|Amini|Androth|Kavaratti";
      city[20]="Indore|Bhopal|Jabalpur|Gwalior|Ujjain|Sagar|Dewas";
      city[21]="Mumbai|Pune|Nagpur|Thane|Nashik|Kalyan-Dombivali";
      city[22]="Bishnupur|Churachandpur|Chandel|Imphal East|Senapati|Tamenglong|Thoubal";
      city[23]="Shillong|Baghmara|Mawsynram|Jowai|Nongpoh|Nongstoin";
      city[24]="Aizawl|Champhai|Khawbung|Thenzawl|Lunglei";
      city[25]="Kohima|Dimapur|Mokokchung|Wokha|Mon|Phek|Kiphire";
      city[26]="Bhubaneshwar|Cuttack|Rourkela|Brahmapur|Sambalpur|Puri";
      city[27]="Sri Aurobindo Ashram|Auroville|Immaculate Conception Cathedral|Promenade Beach|Sri Varadaraja Perumal Temple";
      city[28]="Pathankot|Ludhiana|Batala|Jalandhar|Firozpur|Amritsar";
      city[29]="Udaipur|Jodhpur|Jaisalmer|Jaipur|Bikaner";
      city[30]="Gurudongmar Lake|Nathula Pass|Tsomgo Lake|Yumesamdong (Zero Point)|Yumthang Valley - Tamu Tour and Treks";
      city[31]="Chennai|Coimbatore|Madurai|Tiruchirappalli|Salem|Tirunelveli";
      city[32]="West Tripura|Gomati|South Tripura|North Tripura|Unakoti";
      city[33]="Dehradun|Nainital|Mussoorie|Rishikesh|Haridwar";
      city[34]="Allahabad|Kanpur|Lucknow|Agra|Varanasi|Noida|Faizabad|Sultanpur";
      city[35]="Kolkata|Howrah|Darjeeling|Kalimpong|Kharagpur";


      function print_state(state_id){
       // given the id of the <select> tag as function argument, it inserts <option> tags
        var option_str = document.getElementById(state_id);
            option_str.length=0;
            option_str.options[0] = new Option('Select state','');
            option_str.selectedIndex = 0;

            for (var i=0; i<state_arr.length; i++) {
            option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
           }
        }

      function print_city(city_id, city_index){
        var option_str = document.getElementById(city_id);
            option_str.length=0;  // Fixed by Julian Woods
            option_str.options[0] = new Option('Select city','');
            option_str.selectedIndex = 0;
            var city_arr = city[city_index].split("|");

            for (var i=0; i<city_arr.length; i++) {
            option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
           }
        }