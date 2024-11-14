document.getElementById('degree-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const district = document.getElementById('district').value;
    const subject1 = document.getElementById('subject1').value;
    const subject2 = document.getElementById('subject2').value;
    const subject3 = document.getElementById('subject3').value;
    const zscore = parseFloat(document.getElementById('zscore').value);

    if (subject1 === subject2 || subject2 === subject3 || subject1 === subject3) {
        alert('Please select different subjects.');
        return;
    }

    const selectedSubjects = [subject1, subject2, subject3];

    const degrees = [
      
        //--------------
      
        { 
            name: "COMMERCE", 
            university: "Eastern University, Sri Lanka", 
            districtRequirements: { 'Colombo':1.2854, 'Gampaha':1.2767, 'Kalutara':1.2906, 'Matale':1.1667, 'Kandy':1.1667, 'Nuwara Eliya':1.1315, 'Galle':1.2628, 'Matara':1.3261, 'Hambantota':1.0560, 'Jaffna':"NQC", 'Kilinochchi':"NVQ", 'Mannar':1.0686, 'Mullaitivu':1.2356, 'Vavuniya':1.0574, 'Trincomalee':1.0608, 'Batticaloa':1.1332, 'Ampara':1.0562, 'Puttalam':1.1032, 'Kurunegala':1.3051, 'Anuradhapura':1.1168, 'Polonnaruwa':1.0876, 'Badulla':1.1269, 'Monaragala':1.2283, 'Kegalle':1.2790, 'Ratnapura':1.1834},       
            requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
        },
        { 
            name: "COMMERCE", 
            university: "South Eastern University of Sri Lanka ", 
            districtRequirements: { 'Colombo': 1.2890, 'Gampaha': 1.2833, 'Kalutara':1.3147, 'Matale':1.1869, 'Kandy': 1.2476, 'Nuwara Eliya':1.1193, 'Galle':1.2646, 'Matara': 1.2753, 'Hambantota': 1.0437, 'Jaffna': 0.8918, 'Kilinochchi': 0.9646, 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee': 0.9556, 'Batticaloa': 1.1162, 'Ampara': 1.0142, 'Puttalam':1.0981, 'Kurunegala': 1.3182, 'Anuradhapura': 1.1125, 'Polonnaruwa':1.0800, 'Badulla':1.1269, 'Monaragala': 1.2320, 'Kegalle': 1.2810, 'Ratnapura': 1.2047},       
            requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
        },
        { 
            name: "MANAGEMENT (PUBLIC) HONOURS", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo':  1.5979, 'Gampaha':  1.5452, 'Kalutara':1.5779, 'Matale':1.5862, 'Kandy': 1.5634, 'Nuwara Eliya':1.5713, 'Galle':1.5400, 'Matara': 1.5497, 'Hambantota': 1.5189, 'Jaffna': 1.4919, 'Kilinochchi': 1.5127, 'Mannar':1.5775, 'Mullaitivu':1.5170, 'Vavuniya':1.5170, 'Trincomalee': 1.5620, 'Batticaloa': 1.4990, 'Ampara': 1.5522, 'Puttalam':1.5265, 'Kurunegala': 1.5648, 'Anuradhapura': 1.5806, 'Polonnaruwa':1.6311, 'Badulla':1.5792, 'Monaragala': 1.6193, 'Kegalle': 1.5787, 'Ratnapura': 1.6051},       
            requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
        },
        { 
            name: "BUSINESS INFORMATION SYSTEMS (HONOURS) (BIS)", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo':  1.9317, 'Gampaha':  1.8556, 'Kalutara':1.8643, 'Matale':"NQC", 'Kandy': 1.8075, 'Nuwara Eliya':1.8630, 'Galle':1.8970, 'Matara': 1.9436, 'Hambantota': 1.8041, 'Jaffna': 1.8630, 'Kilinochchi': 1.2875, 'Mannar':1.5583, 'Mullaitivu':1.2820, 'Vavuniya':1.7014, 'Trincomalee': 1.7542, 'Batticaloa': 1.9533, 'Ampara': 1.7972, 'Puttalam':1.7134, 'Kurunegala': 1.7715, 'Anuradhapura': 1.8439, 'Polonnaruwa':1.8352, 'Badulla':1.8670, 'Monaragala': 1.7155, 'Kegalle': 1.8873, 'Ratnapura': 1.9297},       
            requiredSubjects: ["Business Studies","Economics","Accounting","Business Statistics"," Combined Mathematics or Mathematics"," Physics","Logic & Scientific Method","Information & Communication Technology"] 
        },
        { 
            name: "FINANCIAL ENGINEERING #", 
            university: "University of Kelaniya ", 
            districtRequirements: { 'Colombo':  1.5815, 'Gampaha':  1.5772, 'Kalutara':1.5996, 'Matale':"NQC", 'Kandy': 1.4504, 'Nuwara Eliya':1.3529, 'Galle':1.5297, 'Matara': 1.4216, 'Hambantota': 1.1257, 'Jaffna': 1.0875, 'Kilinochchi': "NQC", 'Mannar':1.0630, 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee': 1.1009, 'Batticaloa': 1.1035, 'Ampara': 1.0637, 'Puttalam':1.4138, 'Kurunegala': 1.4696, 'Anuradhapura': 1.5799, 'Polonnaruwa':1.2738, 'Badulla':1.4770, 'Monaragala': 1.6110, 'Kegalle': 1.4420, 'Ratnapura': 1.4591},       
            requiredSubjects: ["Business Studies","Agricultural Science","Geography","Business Statistics"," Combined Mathematics or Mathematics"," History"," Political Science","Logic & Scientific Method","Information & Communication Technology","Physics"]
        },
        { 
            name: "BANKING & INSURANCE ", 
            university: "University of Vavuniya, Sri Lanka", 
            districtRequirements: { 'Colombo':  1.2825, 'Gampaha':  1.2580, 'Kalutara':1.2853, 'Matale':1.2282, 'Kandy': 1.2596, 'Nuwara Eliya':1.2634, 'Galle':1.2955, 'Matara': 1.2892, 'Hambantota': 1.1815, 'Jaffna': 1.0237, 'Kilinochchi': 0.9097, 'Mannar':1.0539, 'Mullaitivu':1.2233, 'Vavuniya':1.2462, 'Trincomalee': 1.2269, 'Batticaloa': 1.1005, 'Ampara': 1.0100, 'Puttalam':1.1703, 'Kurunegala': 1.1911, 'Anuradhapura': 1.1886, 'Polonnaruwa':1.1956, 'Badulla':1.2283 ,'Monaragala': 1.2026, 'Kegalle': 1.2876, 'Ratnapura': 1.2819},       
            requiredSubjects: ["Business Studies","Agricultural Science","Geography","Business Statistics"," Combined Mathematics or Mathematics"," History"," Political Science","Logic & Scientific Method","Information & Communication Technology","Physics"] 
        },
        { 
            name: "LAW", 
            university: "University of Colombo", 
            districtRequirements: { 'Colombo':2.0038, 'Gampaha':2.0025, 'Kalutara':2.0115, 'Matale':2.0307, 'Kandy':2.0030, 'Nuwara Eliya':2.1405, 'Galle':2.0000 ,'Matara':2.0000, 'Hambantota':1.9979, 'Jaffna':2.0690, 'Kilinochchi':"NQC", 'Mannar':2.1026, 'Mullaitivu':2.0776, 'Vavuniya':2.0576, 'Trincomalee':2.0024, 'Batticaloa':2.0666, 'Ampara':2.0192, 'Puttalam':2.0253, 'Kurunegala':2.0030, 'Anuradhapura':1.9954, 'Polonnaruwa':2.0050, 'Badulla':2.0025, 'Monaragala':2.0120, 'Kegalle':2.0055, 'Ratnapura':1.9984}, 
            requiredSubjects: ["Economics","Geography","Business Statistics","English","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science","Accounting","Mathematics","Biology","Chemistry","Physics","Political Science","Higher Mathematics","History","Logic & Scientific Method","Combined Mathematics","Mathematics","Buddhism","Buddhist Civilization","Christianity","Christian Civilization","Greek & Roman Civilization","Japanese","Pali","Sanskrit","Sinhala","Tamil","Hindu Civilization","Hinduism","Islam","Islamic Civilization","Chinese","English","French","German","Arabic","Hindi","Russian"] 
       },
       { 
           name: "LAW", 
           university: "University of Peradeniya", 
           districtRequirements: { 'Colombo':1.9530, 'Gampaha':1.9628, 'Kalutara':1.9653, 'Matale':1.9852, 'Kandy':1.9618, 'Nuwara Eliya':1.9687, 'Galle':1.9857 ,'Matara':1.9597, 'Hambantota':"NQC", 'Jaffna':1.9529, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':1.9594, 'Vavuniya':1.9934, 'Trincomalee':1.9595, 'Batticaloa':1.9797, 'Ampara':1.9530, 'Puttalam':1.9764, 'Kurunegala':1.9841, 'Anuradhapura':1.9585, 'Polonnaruwa':1.9948, 'Badulla':1.9570, 'Monaragala':2.0942, 'Kegalle':1.9769, 'Ratnapura':1.9621}, 
           requiredSubjects: ["Economics","Geography","Business Statistics","English","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science","Accounting","Mathematics","Biology","Chemistry","Physics","Political Science","Higher Mathematics","History","Logic & Scientific Method","Combined Mathematics","Mathematics","Buddhism","Buddhist Civilization","Christianity","Christian Civilization","Greek & Roman Civilization","Japanese","Pali","Sanskrit","Sinhala","Tamil","Hindu Civilization","Hinduism","Islam","Islamic Civilization","Chinese","English","French","German","Arabic","Hindi","Russian"] 
       },
       { 
           name: "LAW", 
           university: "University of Jaffna", 
           districtRequirements: { 'Colombo':1.9239, 'Gampaha':1.9009, 'Kalutara':1.8048, 'Matale':"NQC", 'Kandy':1.8142, 'Nuwara Eliya':1.7784, 'Galle':"NQC",'Matara':1.9404, 'Hambantota':"NQC", 'Jaffna':1.9029, 'Kilinochchi':1.7541, 'Mannar':1.7475, 'Mullaitivu':"NQC", 'Vavuniya':1.9205, 'Trincomalee':1.9353, 'Batticaloa':1.9360, 'Ampara':1.9327, 'Puttalam':1.8898, 'Kurunegala':1.8426, 'Anuradhapura':1.9008, 'Polonnaruwa':"NQC", 'Badulla':1.9149, 'Monaragala':"NQC", 'Kegalle':1.8861, 'Ratnapura':1.9210}, 
           requiredSubjects: ["Economics","Geography","Business Statistics","English","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science","Accounting","Mathematics","Biology","Chemistry","Physics","Political Science","Higher Mathematics","History","Logic & Scientific Method","Combined Mathematics","Mathematics","Buddhism","Buddhist Civilization","Christianity","Christian Civilization","Greek & Roman Civilization","Japanese","Pali","Sanskrit","Sinhala","Tamil","Hindu Civilization","Hinduism","Islam","Islamic Civilization","Chinese","English","French","German","Arabic","Hindi","Russian"] 
        },
        { 
            name: "ARTS*", 
            university: "University of Colombo ", 
            districtRequirements: { 'Colombo': 1.7180, 'Gampaha': 1.7180, 'Kalutara':1.7180, 'Matale':1.7180, 'Kandy': 1.7180, 'Nuwara Eliya':1.7180, 'Galle':1.7180, 'Matara': 1.7180, 'Hambantota': 1.7180, 'Jaffna': 1.7180, 'Kilinochchi':1.7180, 'Mannar':1.7180, 'Mullaitivu':1.7180, 'Vavuniya':1.7180, 'Trincomalee':1.7180, 'Batticaloa': 1.7180, 'Ampara': 1.7180, 'Puttalam':1.7180, 'Kurunegala': 1.7180, 'Anuradhapura': 1.7180, 'Polonnaruwa':1.7180, 'Badulla':1.7180,'Monaragala':1.7180, 'Kegalle': 1.7180, 'Ratnapura': 1.7180},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS*", 
            university: "University of Peradeniya ", 
            districtRequirements: { 'Colombo': 1.5825, 'Gampaha': 1.5825, 'Kalutara':1.5825, 'Matale':1.5825, 'Kandy': 1.5825, 'Nuwara Eliya':1.5825, 'Galle':1.5825, 'Matara': 1.5825, 'Hambantota': 1.5825, 'Jaffna': 1.5825, 'Kilinochchi':1.5825, 'Mannar':1.5825, 'Mullaitivu':1.5825, 'Vavuniya':1.5825, 'Trincomalee':1.5825, 'Batticaloa': 1.5825, 'Ampara': 1.5825, 'Puttalam':1.5825, 'Kurunegala': 1.5825, 'Anuradhapura': 1.5825, 'Polonnaruwa':1.5825, 'Badulla':1.8525,'Monaragala':1.5825, 'Kegalle': 1.5825, 'Ratnapura': 1.5825},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS*", 
            university: "University of Jayawardenepura ", 
            districtRequirements: { 'Colombo': 1.5310, 'Gampaha': 1.5310, 'Kalutara':1.5310, 'Matale':1.5310, 'Kandy': 1.5310, 'Nuwara Eliya':1.5310, 'Galle':1.5310, 'Matara': 1.5310, 'Hambantota': 1.5310, 'Jaffna': 1.5310, 'Kilinochchi':1.5310, 'Mannar':1.5310, 'Mullaitivu':1.5310, 'Vavuniya':1.5310, 'Trincomalee':1.5310, 'Batticaloa': 1.5310, 'Ampara': 1.5310, 'Puttalam':1.5310, 'Kurunegala': 1.5310, 'Anuradhapura': 1.5310, 'Polonnaruwa':1.5310, 'Badulla':1.5310,'Monaragala':1.5310, 'Kegalle': 1.5310, 'Ratnapura': 1.5310},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS*", 
            university: "University of Kelaniya ", 
            districtRequirements: { 'Colombo': 1.4394, 'Gampaha': 1.4394, 'Kalutara':1.4394, 'Matale':1.4394, 'Kandy': 1.4394, 'Nuwara Eliya':1.4394, 'Galle':1.4394, 'Matara': 1.4394, 'Hambantota': 1.4394, 'Jaffna': 1.4394, 'Kilinochchi':1.4394, 'Mannar':1.4394, 'Mullaitivu':1.4394, 'Vavuniya':1.4394, 'Trincomalee':1.4394, 'Batticaloa': 1.4394, 'Ampara': 1.4394, 'Puttalam':1.4394, 'Kurunegala': 1.4394, 'Anuradhapura': 1.4394, 'Polonnaruwa':1.4394, 'Badulla':1.4394,'Monaragala':1.4394, 'Kegalle': 1.4394, 'Ratnapura': 1.4394},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS*", 
            university: "University of Jaffna ", 
            districtRequirements: { 'Colombo': 1.2062, 'Gampaha': 1.2062, 'Kalutara':1.2062, 'Matale':1.2062, 'Kandy': 1.2062, 'Nuwara Eliya':1.2062, 'Galle':1.2062, 'Matara': 1.2062, 'Hambantota': 1.2062, 'Jaffna':1.2062, 'Kilinochchi':1.2062, 'Mannar':1.2062, 'Mullaitivu':1.2062, 'Vavuniya':1.2062, 'Trincomalee':1.2062, 'Batticaloa':1.2062, 'Ampara': 1.2062, 'Puttalam':1.2062, 'Kurunegala':1.2062, 'Anuradhapura':1.2062, 'Polonnaruwa':1.2062, 'Badulla':1.2062,'Monaragala':1.2062, 'Kegalle': 1.2062, 'Ratnapura': 1.2062},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS*", 
            university: "(University of Ruhuna ", 
            districtRequirements: { 'Colombo': 1.3492, 'Gampaha': 1.3492, 'Kalutara':1.3492, 'Matale':1.3492, 'Kandy': 1.3492, 'Nuwara Eliya':1.3492, 'Galle':1.3492, 'Matara': 1.3492, 'Hambantota': 1.3492, 'Jaffna':1.3492, 'Kilinochchi':1.3492, 'Mannar':1.3492, 'Mullaitivu':1.3492, 'Vavuniya':1.3492, 'Trincomalee':1.3492, 'Batticaloa':1.3492, 'Ampara': 1.3492, 'Puttalam':1.3492, 'Kurunegala':1.3492, 'Anuradhapura':1.3492, 'Polonnaruwa':1.3492, 'Badulla':1.3492,'Monaragala':1.3492, 'Kegalle': 1.3492, 'Ratnapura': 1.3492},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS*", 
            university: "Eastern University, Sri Lanka", 
            districtRequirements: { 'Colombo': 1.1729, 'Gampaha': 1.1729, 'Kalutara':1.1729, 'Matale':1.1729, 'Kandy': 1.1729, 'Nuwara Eliya':1.1729, 'Galle':1.1729, 'Matara': 1.1729, 'Hambantota':1.1729, 'Jaffna':1.1729, 'Kilinochchi':1.1729, 'Mannar':1.1729, 'Mullaitivu':1.1729, 'Vavuniya':1.1729, 'Trincomalee':1.1729, 'Batticaloa':1.1729, 'Ampara': 1.1729, 'Puttalam':1.1729, 'Kurunegala':1.1729, 'Anuradhapura':1.1729, 'Polonnaruwa':1.1729, 'Badulla':1.1729,'Monaragala':1.1729, 'Kegalle': 1.1729, 'Ratnapura':1.1729},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS*", 
            university: " South Eastern University, Sri Lanka", 
            districtRequirements: { 'Colombo': 1.3144, 'Gampaha': 1.3144, 'Kalutara':1.3144, 'Matale':1.3144, 'Kandy':1.3144, 'Nuwara Eliya':1.3144, 'Galle':1.3144, 'Matara': 1.3144, 'Hambantota':1.3144, 'Jaffna':1.3144, 'Kilinochchi':1.3144, 'Mannar':1.3144, 'Mullaitivu':1.3144, 'Vavuniya':1.3144, 'Trincomalee':1.3144, 'Batticaloa':1.3144, 'Ampara': 1.3144, 'Puttalam':1.3144, 'Kurunegala':1.3144, 'Anuradhapura':1.3144, 'Polonnaruwa':1.3144, 'Badulla':1.3144,'Monaragala':1.3144, 'Kegalle': 1.3144, 'Ratnapura':1.3144},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS*", 
            university: "Rajarata University of Sri Lanka", 
            districtRequirements: { 'Colombo': 1.3190, 'Gampaha': 1.3190, 'Kalutara':1.3190, 'Matale':1.3190, 'Kandy':1.3190, 'Nuwara Eliya':1.3190, 'Galle':1.3190, 'Matara': 1.3190, 'Hambantota':1.3190, 'Jaffna':1.3190, 'Kilinochchi':1.3190, 'Mannar':1.3190, 'Mullaitivu':1.3190, 'Vavuniya':1.3190, 'Trincomalee':1.3190, 'Batticaloa':1.3190, 'Ampara': 1.3190, 'Puttalam':1.3190, 'Kurunegala':1.3190, 'Anuradhapura':1.3190, 'Polonnaruwa':1.3190, 'Badulla':1.3190,'Monaragala':1.3190, 'Kegalle': 1.3190, 'Ratnapura':1.3190},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS (SP) / MASS MEDIA* #", 
            university: "University of Colombo - Sri Palee Campus", 
            districtRequirements: { 'Colombo': 1.2114, 'Gampaha': 1.2114, 'Kalutara':1.2114, 'Matale':1.2114, 'Kandy':1.2114, 'Nuwara Eliya':1.2114, 'Galle':1.2114, 'Matara': 1.2114, 'Hambantota':1.2114, 'Jaffna':1.2114, 'Kilinochchi':1.2114, 'Mannar':1.2114, 'Mullaitivu':1.2114, 'Vavuniya':1.2114, 'Trincomalee':1.2114, 'Batticaloa':1.2114, 'Ampara':1.2114, 'Puttalam':1.2114, 'Kurunegala':1.2114, 'Anuradhapura':1.2114, 'Polonnaruwa':1.2114, 'Badulla':1.2114,'Monaragala':1.2114, 'Kegalle': 1.2114, 'Ratnapura':1.2114},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS (SP) / PERFORMING ARTS * #", 
            university: "University of Colombo - Sri Palee Campus", 
            districtRequirements: { 'Colombo': 1.0876, 'Gampaha':1.0876, 'Kalutara':1.0876, 'Matale':1.0876, 'Kandy':1.0876, 'Nuwara Eliya':1.0876, 'Galle':1.0876, 'Matara': 1.0876, 'Hambantota':1.0876, 'Jaffna':1.0876, 'Kilinochchi':1.0876, 'Mannar':1.0876, 'Mullaitivu':1.0876, 'Vavuniya':1.0876, 'Trincomalee':1.0876, 'Batticaloa':1.0876, 'Ampara':1.0876, 'Puttalam':1.0876, 'Kurunegala':1.0876, 'Anuradhapura':1.0876, 'Polonnaruwa':1.0876, 'Badulla':1.0876,'Monaragala':1.0876, 'Kegalle':1.0876, 'Ratnapura':1.0876},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "ARTS (SAB) - A * [Arts Stream]", 
            university: "Sabaragamuwa University of Sri Lanka", 
            districtRequirements: { 'Colombo': 1.4045, 'Gampaha':1.4045, 'Kalutara':1.4045, 'Matale':1.4045, 'Kandy':1.4045, 'Nuwara Eliya':1.4045, 'Galle':1.4045, 'Matara': 1.4045, 'Hambantota':1.4045, 'Jaffna':1.4045, 'Kilinochchi':1.4045, 'Mannar':1.4045, 'Mullaitivu':1.4045, 'Vavuniya':1.4045, 'Trincomalee':1.4045, 'Batticaloa':1.4045, 'Ampara':1.4045, 'Puttalam':1.4045, 'Kurunegala':1.4045, 'Anuradhapura':1.4045, 'Polonnaruwa':1.4045, 'Badulla':1.4045,'Monaragala':1.4045, 'Kegalle':1.4045, 'Ratnapura':1.4045},       
            requiredSubjects: ["Economics","Geography"," German",," Political Science"," English ","Information & Communication Technology","Business Statistics","Sinhala","Tamil","Japanese","Chinese"] 
        }, 
        { 
            name: "ARTS (SAB) - B * [Commerce Stream]", 
            university: " Sabaragamuwa University of Sri Lanka", 
            districtRequirements: { 'Colombo': 1.2185, 'Gampaha':1.2185, 'Kalutara':1.2185, 'Matale':1.2185, 'Kandy':1.2185, 'Nuwara Eliya':1.2185, 'Galle':1.2185, 'Matara': 1.2185, 'Hambantota':1.2185, 'Jaffna':1.2185, 'Kilinochchi':1.2185, 'Mannar':1.2185, 'Mullaitivu':1.2185, 'Vavuniya':1.2185, 'Trincomalee':1.2185, 'Batticaloa':1.2185, 'Ampara':1.2185, 'Puttalam':1.2185, 'Kurunegala':1.2185, 'Anuradhapura':1.2185, 'Polonnaruwa':1.2185, 'Badulla':1.2185,'Monaragala':1.2185, 'Kegalle':1.2185, 'Ratnapura':1.2185},       
            requiredSubjects: ["Economics","Geography"," German",," Political Science"," English ","Information & Communication Technology","Business Statistics","Sinhala","Tamil","Japanese","Chinese"] 
        }, 
        { 
            name: "ARTS-INFORMATION TECHNOLOGY *", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo': 1.8484, 'Gampaha':1.8484, 'Kalutara':1.8484, 'Matale':1.8484, 'Kandy':1.8484, 'Nuwara Eliya':1.8484, 'Galle':1.8484, 'Matara': 1.8484, 'Hambantota':1.8484, 'Jaffna':1.8484, 'Kilinochchi':1.8484, 'Mannar':1.8484, 'Mullaitivu':1.8484, 'Vavuniya':1.8484, 'Trincomalee':1.8484, 'Batticaloa':1.8484, 'Ampara':1.8484, 'Puttalam':1.8484, 'Kurunegala':1.8484, 'Anuradhapura':1.8484, 'Polonnaruwa':1.8484, 'Badulla':1.8484,'Monaragala':1.8484, 'Kegalle':1.8484, 'Ratnapura':1.8484},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "AQUATIC BIORESOURCES", 
            university: " University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo': 0.9271, 'Gampaha':0.7695, 'Kalutara':1.0194, 'Matale':0.6803, 'Kandy':0.9049, 'Nuwara Eliya':0.6563, 'Galle':0.9275, 'Matara': 0.9528, 'Hambantota':0.9054, 'Jaffna':0.9949, 'Kilinochchi':0.3307, 'Mannar':0.8365, 'Mullaitivu':0.4195, 'Vavuniya':0.7592, 'Trincomalee':1.0166, 'Batticaloa':1.0006, 'Ampara':0.7969, 'Puttalam':0.7097, 'Kurunegala':0.9248, 'Anuradhapura':0.5820, 'Polonnaruwa':0.4012, 'Badulla':0.8145,'Monaragala':0.8972, 'Kegalle':0.8502, 'Ratnapura':0.9760},       
            requiredSubjects: ["Biology","Chemistry","Physics","Agricultural Science"] 
        },
         { 
            name: "URBAN BIORESOURCES", 
            university: " University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo': 0.7891, 'Gampaha':0.7556, 'Kalutara':0.8140, 'Matale':0.6335, 'Kandy':0.7766, 'Nuwara Eliya':0.8008, 'Galle':0.8782, 'Matara': 0.7989, 'Hambantota':0.8160, 'Jaffna':0.6890, 'Kilinochchi':0.3022, 'Mannar':0.2125, 'Mullaitivu':0.2226, 'Vavuniya':0.7938, 'Trincomalee':0.7425, 'Batticaloa':0.7491, 'Ampara':0.7235, 'Puttalam':0.5615, 'Kurunegala':0.8714, 'Anuradhapura':0.5738, 'Polonnaruwa':0.5088, 'Badulla':0.7917,'Monaragala':0.7331, 'Kegalle':0.8456, 'Ratnapura':0.8792},       
            requiredSubjects: ["Biology","Chemistry","Physics","Agricultural Science"] 
        },
        { 
            name: "SOCIAL WORK *", 
            university: "University of Peradeniya", 
            districtRequirements: { 'Colombo': 1.8014, 'Gampaha':1.8014, 'Kalutara':1.8014, 'Matale':1.8014, 'Kandy':1.8014, 'Nuwara Eliya':1.8014, 'Galle':1.8014, 'Matara': 1.8014, 'Hambantota':1.8014, 'Jaffna':1.8014, 'Kilinochchi':1.8014, 'Mannar':1.8014, 'Mullaitivu':1.8014, 'Vavuniya':1.8014, 'Trincomalee':1.8014, 'Batticaloa':1.8014, 'Ampara':1.8014, 'Puttalam':1.8014, 'Kurunegala':1.8014, 'Anuradhapura':1.8014, 'Polonnaruwa':1.8014, 'Badulla':1.8014,'Monaragala':1.8014, 'Kegalle':1.8014, 'Ratnapura':1.8014},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
        { 
            name: "SOCIAL WORK *", 
            university: "University of Jayewardenepura", 
            districtRequirements: { 'Colombo': 1.7223, 'Gampaha':1.7223, 'Kalutara':1.7223, 'Matale':1.7223, 'Kandy':1.7223, 'Nuwara Eliya':1.7223, 'Galle':1.7223, 'Matara': 1.7223, 'Hambantota':1.7223, 'Jaffna':1.7223, 'Kilinochchi':1.7223, 'Mannar':1.7223, 'Mullaitivu':1.7223, 'Vavuniya':1.7223, 'Trincomalee':1.7223, 'Batticaloa':1.7223, 'Ampara':1.7223, 'Puttalam':1.7223, 'Kurunegala':1.7223, 'Anuradhapura':1.7223, 'Polonnaruwa':1.7223, 'Badulla':1.7223,'Monaragala':1.7223, 'Kegalle':1.7223, 'Ratnapura':1.7223},       
            requiredSubjects: ["Economics", "Geography", "History of India","History of Europe","History of Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing (Indigeneous)","Dancing (Bharata)", "Music", "Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)", "Western Music" , "Oriental Music", "Carnatic Music","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },











        

//-----------------------  
        { 
            name: "ENGINEERING TECHNOLOGY (ET)", 
            university: "University of Colombo", 
            districtRequirements: { 'Colombo':1.7916, 'Gampaha':1.7798, 'Kalutara':1.7798, 'Matale':1.7553, 'Kandy':1.7588, 'Nuwara Eliya':1.8890, 'Galle':1.7665 ,'Matara':1.7598, 'Hambantota':1.7827, 'Jaffna':1.8646, 'Kilinochchi':1.8774, 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.7613, 'Batticaloa':1.7827, 'Ampara':"NQC", 'Puttalam':1.8230, 'Kurunegala':1.7725, 'Anuradhapura':1.7830, 'Polonnaruwa':"NQC", 'Badulla':1.7891, 'Monaragala':1.8538, 'Kegalle':1.8327, 'Ratnapura':1.8044}, 
            requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
        },
      
//-----------------------        
      
        
//-----------------------  
      

        // Add more degrees, university names, and their requirements
    ];
    let suitableDegrees = [];

 for (let i = 0; i < degrees.length; i++) {
    const degree = degrees[i];
    const districtZScore = degree.districtRequirements[district];

    //check if all selected subjects are in the required subjects and additional required subjects
    let hasRequiredSubjects = selectedSubjects.every(subject => degree.requiredSubjects.includes(subject));

    if (degree.name === "COMMERCE") {
        const additionalRequiredSubject1 = "Business Studies";
        const additionalRequiredSubject2 = "Economics";
        const additionalRequiredSubject3 = "Accounting";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& (districtZScore <= zscore);
                                                         
                             
    }
    if (degree.name === "BANKING & INSURANCE ") {
        const additionalRequiredSubject1 = "Accounting";
        const additionalRequiredSubject2 = "Economics";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& (districtZScore <= zscore);
                                                         
                             
    }  
    if (degree.name === "ARTS* ") {
        // Define baskets
        const basket1 = ["Economics", "Geography", "History of India","History of Europe","History Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology"];
        const basket2 = ["Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization"];
        const basket3 = ["Art", "Dancing (Indigeneous)","Dancing (Bharata)"," Oriental Music","Western Music "," Carnatic Music" ,"Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)","Drama and Theatre (English)"];
        const basket4 = ["Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"];
    
        // Initialize basket counters and lists
        let basket1Count = 0;
        let basket2Count = 0;
        let basket3Count = 0;
        let basket4Count = 0;
    
        let selectedBasket2Religions = [];
        let selectedBasket2Civilizations = [];
    
        // Count subjects in each basket
        for (let i = 0; i < selectedSubjects.length; i++) {
            const subject = selectedSubjects[i];
            if (basket1.includes(subject)) {
                basket1Count++;
            } else if (basket2.includes(subject)) {
                basket2Count++;
                if (["Buddhism", "Hinduism", "Christianity", "Islam"].includes(subject)) {
                    selectedBasket2Religions.push(subject);
                } else if (["Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization"].includes(subject)) {
                    selectedBasket2Civilizations.push(subject);
                }
            } else if (basket3.includes(subject)) {
                basket3Count++;
            } else if (basket4.includes(subject)) {
                basket4Count++;
            }
        }
    
        // Validate basket rules for the ARTS* degree
        const validBasket1 = basket1Count > 0;
        const validBasket2 = basket2Count <= 2 && !selectedBasket2Religions.some(religion => selectedBasket2Civilizations.includes(religion + " Civilization"));
        const validBasket3 = basket3Count <= 2 && !(selectedSubjects.filter(subject => subject.startsWith("Drama & Theatre")).length > 1);
        const validBasket4 = basket4Count <= 2;
    
        
        if (validBasket1 && validBasket2 && validBasket3 && validBasket4  && (districtZScore <= zscore)) {
            suitableDegrees.push(degree);
        }
    
    }   
    if (degree.name === "ARTS (SP) / MASS MEDIA* # ") {
        // Define baskets
        const basket1 = ["Economics", "Geography", "History of India","History of Europe","History Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology"];
        const basket2 = ["Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization"];
        const basket3 = ["Art", "Dancing (Indigeneous)","Dancing (Bharata)"," Oriental Music","Western Music "," Carnatic Music" ,"Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)","Drama and Theatre (English)"];
        const basket4 = ["Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"];
    
        // Initialize basket counters and lists
        let basket1Count = 0;
        let basket2Count = 0;
        let basket3Count = 0;
        let basket4Count = 0;
    
        let selectedBasket2Religions = [];
        let selectedBasket2Civilizations = [];
    
        // Count subjects in each basket
        for (let i = 0; i < selectedSubjects.length; i++) {
            const subject = selectedSubjects[i];
            if (basket1.includes(subject)) {
                basket1Count++;
            } else if (basket2.includes(subject)) {
                basket2Count++;
                if (["Buddhism", "Hinduism", "Christianity", "Islam"].includes(subject)) {
                    selectedBasket2Religions.push(subject);
                } else if (["Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization"].includes(subject)) {
                    selectedBasket2Civilizations.push(subject);
                }
            } else if (basket3.includes(subject)) {
                basket3Count++;
            } else if (basket4.includes(subject)) {
                basket4Count++;
            }
        }
    
        // Validate basket rules for the ARTS* degree
        const validBasket1 = basket1Count > 0;
        const validBasket2 = basket2Count <= 2 && !selectedBasket2Religions.some(religion => selectedBasket2Civilizations.includes(religion + " Civilization"));
        const validBasket3 = basket3Count <= 2 && !(selectedSubjects.filter(subject => subject.startsWith("Drama & Theatre")).length > 1);
        const validBasket4 = basket4Count <= 2;
    
        
        if (validBasket1 && validBasket2 && validBasket3 && validBasket4  && (districtZScore <= zscore)) {
            suitableDegrees.push(degree);
        }
    
    }   
    if (degree.name === "SOCIAL WORK *") {
        // Define baskets
        const basket1 = ["Economics", "Geography", "History of India","History of Europe","History Modern World", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology"];
        const basket2 = ["Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization"];
        const basket3 = ["Art", "Dancing (Indigeneous)","Dancing (Bharata)"," Oriental Music","Western Music "," Carnatic Music" ,"Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)","Drama and Theatre (English)"];
        const basket4 = ["Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"];
    
        // Initialize basket counters and lists
        let basket1Count = 0;
        let basket2Count = 0;
        let basket3Count = 0;
        let basket4Count = 0;
    
        let selectedBasket2Religions = [];
        let selectedBasket2Civilizations = [];
    
        // Count subjects in each basket
        for (let i = 0; i < selectedSubjects.length; i++) {
            const subject = selectedSubjects[i];
            if (basket1.includes(subject)) {
                basket1Count++;
            } else if (basket2.includes(subject)) {
                basket2Count++;
                if (["Buddhism", "Hinduism", "Christianity", "Islam"].includes(subject)) {
                    selectedBasket2Religions.push(subject);
                } else if (["Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization"].includes(subject)) {
                    selectedBasket2Civilizations.push(subject);
                }
            } else if (basket3.includes(subject)) {
                basket3Count++;
            } else if (basket4.includes(subject)) {
                basket4Count++;
            }
        }
    
        // Validate basket rules for the ARTS* degree
        const validBasket1 = basket1Count > 0;
        const validBasket2 = basket2Count <= 2 && !selectedBasket2Religions.some(religion => selectedBasket2Civilizations.includes(religion + " Civilization"));
        const validBasket3 = basket3Count <= 2 && !(selectedSubjects.filter(subject => subject.startsWith("Drama & Theatre")).length > 1);
        const validBasket4 = basket4Count <= 2;
    
        
        if (validBasket1 && validBasket2 && validBasket3 && validBasket4  && (districtZScore <= zscore)) {
            suitableDegrees.push(degree);
        }
    
    }   
    else if(hasRequiredSubjects && districtZScore <= zscore) {
        // For other degrees, check only the district Z score and required subjects
        hasRequiredSubjects=hasRequiredSubjects && (districtZScore <= zscore);
    
    }

    // Evaluate if the degree meets the required subjects and district Z score criteria
 if (hasRequiredSubjects && districtZScore <= zscore) {
    suitableDegrees.push(degree);
}
  
}



console.log(suitableDegrees)
    let resultHTML = '<h7>This system allows you to find a degree to your results according to the last year cutoff marks in your district. All details are based on UGC handbook.</h7><h2>Suitable Degrees:</h2><br>';
  
    if (suitableDegrees.length > 0) {
        suitableDegrees.forEach(degree => {
            resultHTML += `
                <div>

                    <h3>🎓${degree.name} at ${degree.university}</h3>
                    <p>🔹Required Z-score for ${district}: ${degree.districtRequirements[district]} </p>
                    <p>🔹Required Subjects: ${degree.requiredSubjects.join(', ')}   </p>   
                   
                   
                              
                    <br>
                </div>
   
            `;
        });
    } else {
        resultHTML += '<p>No suitable degrees found based on your Z-score and subjects.<br> Dear Student, Dont lose heart.There are many ways in which you can purse your degree.We have the means for that.</p>';

    }

    document.getElementById('result').innerHTML = resultHTML;
});