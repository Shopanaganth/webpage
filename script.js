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
        
//--------------page1 ugc hand book
        { 
            name: "MEDICINE", 
            university: "University of Colombo", 
            districtRequirements: { 'Colombo': 2.4516, 'Gampaha': 2.4412, 'Kalutara': 2.4446, 'Matale': 2.4981, 'Kandy': 2.5501, 'Nuwara Eliya': "NQC", 'Galle': 2.4478, 'Matara': 2.4552, 'Hambantota': 2.4711, 'Jaffna': 2.4504, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 2.5134, 'Trincomalee': 2.4637, 'Batticaloa':2.4902, 'Ampara':2.4374, 'Puttalam': 2.4946, 'Kurunegala': 2.4450, 'Anuradhapura': 2.5446, 'Polonnaruwa': 2.4695, 'Badulla': 2.5455, 'Monaragala': "NQC", 'Kegalle': 2.4552, 'Ratnapura': 2.4542}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "University of Moratuwa", 
            districtRequirements: { 'Colombo': 1.8732, 'Gampaha': 1.8707, 'Kalutara': 1.8732, 'Matale': "NQC", 'Kandy': 1.8827, 'Nuwara Eliya': 1.9286, 'Galle': 1.8728, 'Matara': 1.9130, 'Hambantota': 1.9222, 'Jaffna': 2.0797, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya':1.8938, 'Trincomalee': 1.8843, 'Batticaloa': "NQC", 'Ampara':1.8997, 'Puttalam': 1.9381, 'Kurunegala': 1.8901, 'Anuradhapura': "NQC", 'Polonnaruwa': 1.9909, 'Badulla': "NQC", 'Monaragala': "NQC", 'Kegalle': 1.9286, 'Ratnapura': 1.8706 }, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "University of Peradeniya", 
            districtRequirements: { 'Colombo': 2.2279, 'Gampaha': 2.2147, 'Kalutara':2.2204 , 'Matale':2.2150, 'Kandy': 2.2216, 'Nuwara Eliya': 2.2598, 'Galle': 2.2429, 'Matara': 2.2225, 'Hambantota': 2.2646, 'Jaffna': 2.2120, 'Kilinochchi':2.3267, 'Mannar': "NQC", 'Mullaitivu': 2.2786, 'Vavuniya':2.2496, 'Trincomalee': 2.2480, 'Batticaloa': 2.2518, 'Ampara': 2.2384, 'Puttalam': 2.2805, 'Kurunegala': 2.2114, 'Anuradhapura': 2.2347, 'Polonnaruwa': 2.2591, 'Badulla': 2.2159, 'Monaragala': 2.2410, 'Kegalle': 2.2150, 'Ratnapura':2.2112}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "University of Sri Jeyawardenepura", 
            districtRequirements: { 'Colombo': 2.1465, 'Gampaha':2.1566, 'Kalutara': 2.1474, 'Matale':2.1943, 'Kandy': 2.1512, 'Nuwara Eliya': "NQC", 'Galle': 2.1503, 'Matara': 2.1557, 'Hambantota': 2.1643, 'Jaffna': 2.1968, 'Kilinochchi': 2.1972, 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya':2.1503, 'Trincomalee': 2.1783, 'Batticaloa': 2.1621, 'Ampara':2.1690, 'Puttalam':2.1698, 'Kurunegala': 2.1529, 'Anuradhapura': 2.1850, 'Polonnaruwa': 2.1774, 'Badulla': 2.1671, 'Monaragala': "NQC", 'Kegalle': 2.1465, 'Ratnapura': 2.1586 }, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "University of Kelaniya", 
            districtRequirements: { 'Colombo': 2.0526, 'Gampaha': 2.0517, 'Kalutara':2.0514 , 'Matale':2.0612, 'Kandy': 2.0545, 'Nuwara Eliya': 2.0969, 'Galle': 2.0791, 'Matara': 2.0508, 'Hambantota': 2.0508, 'Jaffna': "NQC", 'Kilinochchi':"NQC", 'Mannar': 2.1087, 'Mullaitivu': "NQC", 'Vavuniya':"NQC", 'Trincomalee': 2.0533, 'Batticaloa': 2.0571, 'Ampara': 2.0536, 'Puttalam': 2.0552, 'Kurunegala': 2.0517, 'Anuradhapura': 2.0651, 'Polonnaruwa': 2.1071, 'Badulla':2.0619, 'Monaragala': 2.1015, 'Kegalle': 2.0600, 'Ratnapura':2.0526}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "University of Jaffna", 
            districtRequirements: { 'Colombo': 1.8790, 'Gampaha': 1.7278, 'Kalutara':1.7840 , 'Matale':1.7073, 'Kandy': 1.8169, 'Nuwara Eliya':1.7308, 'Galle': "NQC", 'Matara': "NQC", 'Hambantota': 1.7765, 'Jaffna': 1.8724, 'Kilinochchi':1.7943, 'Mannar': 1.7335, 'Mullaitivu':1.8819, 'Vavuniya':1.8433, 'Trincomalee': 1.7138, 'Batticaloa': 1.8226, 'Ampara': 1.8321, 'Puttalam': 1.7175, 'Kurunegala': 1.8028, 'Anuradhapura': 1.7109, 'Polonnaruwa': 1.7355, 'Badulla':1.7099, 'Monaragala': 1.7277, 'Kegalle': 1.8226, 'Ratnapura':1.7520}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "University of Ruhuna", 
            districtRequirements: { 'Colombo': 1.9559, 'Gampaha': 1.9550, 'Kalutara':1.9559 , 'Matale':1.9778, 'Kandy': 1.9598, 'Nuwara Eliya':1.9775, 'Galle': 1.9552, 'Matara': 1.9550, 'Hambantota':1.9606, 'Jaffna': "NQC", 'Kilinochchi':"NQC", 'Mannar': "NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.9671, 'Trincomalee': 2.0044, 'Batticaloa': 1.9614, 'Ampara': 1.9566, 'Puttalam': 1.9578, 'Kurunegala': 1.9594, 'Anuradhapura': 1.9552, 'Polonnaruwa': "NQC", 'Badulla':1.9626, 'Monaragala': 1.9757, 'Kegalle': 1.9616, 'Ratnapura':1.9571}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "Eastern University of Sri Lanka ", 
            districtRequirements: { 'Colombo': "NQC", 'Gampaha': 1.6406, 'Kalutara':1.7783 , 'Matale':1.6524, 'Kandy': "NQC", 'Nuwara Eliya':1.4296, 'Galle': "NQC", 'Matara': "NQC", 'Hambantota':1.8366, 'Jaffna': "NQC", 'Kilinochchi':"NQC", 'Mannar': 1.6845, 'Mullaitivu':"NQC", 'Vavuniya':1.9934, 'Trincomalee': 1.7370, 'Batticaloa': 1.8413, 'Ampara': 1.8169, 'Puttalam': 1.6762, 'Kurunegala': "NQC", 'Anuradhapura': 1.5146, 'Polonnaruwa': 1.4283, 'Badulla':"NQC", 'Monaragala': "NQC", 'Kegalle': 1.8207, 'Ratnapura':"NQC"}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "Rajarata University of Sri Lanka ", 
            districtRequirements: { 'Colombo': 1.8772, 'Gampaha': 1.8547, 'Kalutara':1.8995, 'Matale':1.8604, 'Kandy': 1.8509, 'Nuwara Eliya':1.9025, 'Galle': 1.9071, 'Matara': 1.9079, 'Hambantota':1.8525, 'Jaffna': "NQC", 'Kilinochchi':"NQC", 'Mannar': "NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.9980, 'Trincomalee': 1.8620, 'Batticaloa': 1.8601, 'Ampara': 1.8566, 'Puttalam': 1.8496, 'Kurunegala': 1.8596, 'Anuradhapura': 1.8506, 'Polonnaruwa': 1.9345, 'Badulla':1.8525, 'Monaragala': 1.8706, 'Kegalle': 1.8510, 'Ratnapura':1.8509}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "Wayamba University of Sri Lanka ", 
            districtRequirements: { 'Colombo': 1.9152, 'Gampaha': 1.6890, 'Kalutara':1.7711, 'Matale':1.6921, 'Kandy': 1.8229, 'Nuwara Eliya':1.7319, 'Galle': 1.8661, 'Matara': "NQC", 'Hambantota':"NQC", 'Jaffna': "NQC", 'Kilinochchi':"NQC", 'Mannar': 1.8481, 'Mullaitivu':"NQC", 'Vavuniya':1.9980, 'Trincomalee': 1.7552, 'Batticaloa': "NQC", 'Ampara': 1.8216, 'Puttalam': 1.6873, 'Kurunegala': 1.8038, 'Anuradhapura': 1.6969, 'Polonnaruwa': 1.6921, 'Badulla':1.6892, 'Monaragala': 1.6948, 'Kegalle': 1.7702, 'Ratnapura':1.7803}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "MEDICINE", 
            university: "Uwa Wellassa University of Sri Lanka ", 
            districtRequirements: { 'Colombo': "NQC", 'Gampaha': 1.6473, 'Kalutara':"NQC", 'Matale':1.6520, 'Kandy': "NQC", 'Nuwara Eliya':1.3830, 'Galle': "NQC", 'Matara': "NQC", 'Hambantota':"NQC", 'Jaffna': "NQC", 'Kilinochchi':"NQC", 'Mannar': "NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee': "NQC", 'Batticaloa': "NQC", 'Ampara': "NQC", 'Puttalam': "NQC", 'Kurunegala': "NQC", 'Anuradhapura': 1.5985, 'Polonnaruwa': 1.3959, 'Badulla':"NQC", 'Monaragala': "NQC", 'Kegalle': "NQC", 'Ratnapura':1.8407}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "DENTAL SURGERY", 
            university: "University of Peradeniya", 
            districtRequirements: { 'Colombo': 1.8311, 'Gampaha': 1.6275, 'Kalutara':1.7698, 'Matale':1.6329, 'Kandy': 1.7860, 'Nuwara Eliya':1.3891, 'Galle': 1.8319, 'Matara':1.8405, 'Hambantota':1.7587, 'Jaffna':1.8086, 'Kilinochchi':1.6660, 'Mannar': 1.6619, 'Mullaitivu':1.7586, 'Vavuniya':"NQC", 'Trincomalee': 1.6686, 'Batticaloa': 1.7962, 'Ampara': 1.7816, 'Puttalam': 1.6623, 'Kurunegala': 1.7860, 'Anuradhapura': 1.5063, 'Polonnaruwa': 1.3714, 'Badulla':1.6678, 'Monaragala': 1.5849, 'Kegalle': 1.7513, 'Ratnapura':1.7434}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "DENTAL SURGERY", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo': 1.8337, 'Gampaha': 1.6219, 'Kalutara':1.7682, 'Matale':"NQC", 'Kandy': "NQC", 'Nuwara Eliya':1.3789, 'Galle': 1.8340, 'Matara':1.8535, 'Hambantota':1.8254, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar': "NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.8206, 'Trincomalee': "NQC", 'Batticaloa': "NQC", 'Ampara': "NQC", 'Puttalam': "NQC", 'Kurunegala': "NQC", 'Anuradhapura': "NQC", 'Polonnaruwa': "NQC", 'Badulla':"NQC", 'Monaragala': "NQC", 'Kegalle': "NQC", 'Ratnapura':1.7317}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "VETERINARY SCIENCE", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo': 1.7345, 'Gampaha': 1.6011, 'Kalutara':1.7211, 'Matale':1.5648, 'Kandy':1.7446, 'Nuwara Eliya':1.3253, 'Galle': 1.7523, 'Matara':1.7211, 'Hambantota':1.7457, 'Jaffna':1.7370, 'Kilinochchi':1.6470, 'Mannar': 1.5410, 'Mullaitivu':1.6464, 'Vavuniya':1.7615, 'Trincomalee': 1.6649, 'Batticaloa': 1.7456, 'Ampara': 1.7268, 'Puttalam':1.6574, 'Kurunegala':1.7427, 'Anuradhapura':1.4687, 'Polonnaruwa': 1.3320, 'Badulla':1.6002, 'Monaragala': 1.5756, 'Kegalle': 1.7214, 'Ratnapura':1.7202}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "BIOCHEMISTRY & MOLECULAR BIOLOGY", 
            university: "University of Colombo", 
            districtRequirements: { 'Colombo': 1.7704, 'Gampaha': 1.5980, 'Kalutara':1.7372, 'Matale':1.5588, 'Kandy':1.7709, 'Nuwara Eliya':1.3150, 'Galle':1.7812, 'Matara':1.7361, 'Hambantota':1.7306, 'Jaffna':1.7859, 'Kilinochchi':1.5353, 'Mannar': 1.5458, 'Mullaitivu':1.3834, 'Vavuniya':1.7345, 'Trincomalee': 1.6639, 'Batticaloa': 1.7530, 'Ampara':1.7033, 'Puttalam':1.6201, 'Kurunegala':1.7739, 'Anuradhapura':1.5009, 'Polonnaruwa': 1.3170, 'Badulla':1.6644, 'Monaragala': 1.5776, 'Kegalle': 1.7437, 'Ratnapura':1.7147}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "AGRICULTURAL TECHNOLOGY & MANAGEMENTY", 
            university: "University of Peradeniya", 
            districtRequirements: { 'Colombo': 1.1759, 'Gampaha': 1.2040, 'Kalutara':1.2884, 'Matale':1.2325, 'Kandy':1.3487, 'Nuwara Eliya':1.1548, 'Galle':1.3090, 'Matara':1.3705, 'Hambantota':1.3042, 'Jaffna':1.3043, 'Kilinochchi':1.2744, 'Mannar': 1.2453, 'Mullaitivu':1.2566, 'Vavuniya':0.6477, 'Trincomalee': 1.0878, 'Batticaloa': 1.1553, 'Ampara':1.3384, 'Puttalam':1.1835, 'Kurunegala':1.3325, 'Anuradhapura':1.2957, 'Polonnaruwa': 1.2649, 'Badulla':1.3423, 'Monaragala':1.2858, 'Kegalle': 1.2670, 'Ratnapura':1.2033}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Agricultural Science","Mathematics"] 
        },
        { 
            name: "AGRICULTURE", 
            university: "University of Jaffna", 
            districtRequirements: { 'Colombo': 0.4638, 'Gampaha': 0.4618, 'Kalutara':0.6491, 'Matale':0.6560, 'Kandy':0.7642, 'Nuwara Eliya':0.4627, 'Galle':0.6394, 'Matara':0.6099, 'Hambantota':0.8231, 'Jaffna':0.6679, 'Kilinochchi':0.5958, 'Mannar': 0.4667, 'Mullaitivu':0.6176, 'Vavuniya':0.5199, 'Trincomalee':0.4674, 'Batticaloa': 0.5724, 'Ampara':0.5844, 'Puttalam':0.4726, 'Kurunegala':0.6497, 'Anuradhapura':0.4627, 'Polonnaruwa': 0.5278, 'Badulla':0.5294, 'Monaragala':0.4781, 'Kegalle': 0.6261, 'Ratnapura':0.5341}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Agricultural Science","Mathematics"] 
        },
        { 
            name: "AGRICULTURE", 
            university: "Eastern University of Sri Lanka", 
            districtRequirements: { 'Colombo': 0.4158, 'Gampaha':0.4227, 'Kalutara':0.7903, 'Matale':"NQC", 'Kandy':0.6029, 'Nuwara Eliya':0.3495, 'Galle':0.6045, 'Matara':0.5849, 'Hambantota':0.6204, 'Jaffna':0.6728, 'Kilinochchi':0.4655, 'Mannar': 0.3943, 'Mullaitivu':0.7097, 'Vavuniya':0.4281, 'Trincomalee':0.4730, 'Batticaloa': 0.5697, 'Ampara':0.6102, 'Puttalam':0.3803, 'Kurunegala':0.6270, 'Anuradhapura':0.4504, 'Polonnaruwa': 0.3220, 'Badulla':0.5394, 'Monaragala':0.4486, 'Kegalle': 0.6326, 'Ratnapura':0.5334}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Agricultural Science","Mathematics"] 
        },
        { 
            name: "AGRICULTURE", 
            university: "Rajarata University of Sri Lanka", 
            districtRequirements: { 'Colombo':0.5911, 'Gampaha':0.5781, 'Kalutara':0.5987, 'Matale':0.6104, 'Kandy':0.6183, 'Nuwara Eliya':0.6258, 'Galle':0.5857, 'Matara':0.5798, 'Hambantota':0.6221, 'Jaffna':0.7215, 'Kilinochchi':0.8534, 'Mannar': "NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa': "NQC", 'Ampara':0.5905, 'Puttalam':0.6016, 'Kurunegala':0.6299, 'Anuradhapura':0.6045, 'Polonnaruwa': 0.6089, 'Badulla':0.5930, 'Monaragala':0.5756, 'Kegalle': 0.5952, 'Ratnapura':0.5829}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Agricultural Science","Mathematics"] 
        },
        { 
            name: "AGRICULTURE", 
            university: "Sabaragamuwa University of Sri Lanka", 
            districtRequirements: { 'Colombo':0.6993, 'Gampaha':0.6872, 'Kalutara':0.6924, 'Matale':0.7378, 'Kandy':0.7021, 'Nuwara Eliya':0.9751, 'Galle':0.7423, 'Matara':0.7077, 'Hambantota':0.7067, 'Jaffna':0.6964, 'Kilinochchi':"NQC", 'Mannar': 0.7442, 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa': 0.7723, 'Ampara':0.7557, 'Puttalam':0.9017, 'Kurunegala':0.6898, 'Anuradhapura':0.7015, 'Polonnaruwa': "NQC", 'Badulla':0.7380, 'Monaragala':0.7958, 'Kegalle': 0.7120, 'Ratnapura':0.6883}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Agricultural Science","Mathematics"] 
        },
        { 
            name: "AGRICULTURE", 
            university: "Wayamba University of Sri Lanka", 
            districtRequirements: { 'Colombo':0.5923, 'Gampaha':0.6036, 'Kalutara':0.5923, 'Matale':0.6231, 'Kandy':0.6098, 'Nuwara Eliya':0.6297, 'Galle':0.5863, 'Matara':0.5887, 'Hambantota':0.6287, 'Jaffna':0.6797, 'Kilinochchi':"NQC", 'Mannar': 0.8777, 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':0.6900, 'Batticaloa': 0.5791, 'Ampara':0.5914, 'Puttalam':0.5783, 'Kurunegala':0.6308, 'Anuradhapura':0.5884, 'Polonnaruwa': 0.5797, 'Badulla':0.5809, 'Monaragala':0.6198, 'Kegalle':0.5924, 'Ratnapura':0.5902}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Agricultural Science","Mathematics"] 
        },
        { 
            name: "FOOD SCIENCE & NUTRITION", 
            university: "Wayamba University of Sri Lanka", 
            districtRequirements: { 'Colombo':1.0529, 'Gampaha':1.1113, 'Kalutara':1.2161, 'Matale':1.1317, 'Kandy':1.0935, 'Nuwara Eliya':1.0887, 'Galle':1.1207, 'Matara':1.1777, 'Hambantota':1.1177, 'Jaffna':1.2116, 'Kilinochchi':0.7893, 'Mannar':1.1268, 'Mullaitivu':0.9533, 'Vavuniya':0.9612, 'Trincomalee':1.1347, 'Batticaloa':1.1750, 'Ampara':1.2193, 'Puttalam':1.1472, 'Kurunegala':1.1517, 'Anuradhapura':1.0755, 'Polonnaruwa':1.1110, 'Badulla':1.1170, 'Monaragala':1.2099, 'Kegalle':1.1986, 'Ratnapura':1.1127}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Agricultural Science","Mathematics"] 
        },
        { 
            name: "FOOD SCIENCE & TECHNOLOGY", 
            university: "University of Peradeniya", 
            districtRequirements: { 'Colombo':1.5034, 'Gampaha':1.5113, 'Kalutara':1.5138, 'Matale':"NQC", 'Kandy':1.5677, 'Nuwara Eliya':"NQC", 'Galle':1.5440, 'Matara':1.6068, 'Hambantota':1.5091, 'Jaffna':1.5054, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':"NQC", 'Kurunegala':1.5090, 'Anuradhapura':"NQC", 'Polonnaruwa':"NQC", 'Badulla':"NQC", 'Monaragala':1.5401, 'Kegalle':1.5336, 'Ratnapura':1.5053}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "FOOD SCIENCE & TECHNOLOGY", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo':1.4434, 'Gampaha':1.4441, 'Kalutara':1.4433, 'Matale':"NQC", 'Kandy':1.4696, 'Nuwara Eliya':"NQC", 'Galle':1.4435, 'Matara':1.4624, 'Hambantota':1.4433, 'Jaffna':1.4820, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':1.4971, 'Kurunegala':1.4671, 'Anuradhapura':"NQC", 'Polonnaruwa':"NQC", 'Badulla':"NQC", 'Monaragala':1.4761, 'Kegalle':1.5023, 'Ratnapura':1.4642}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "FOOD SCIENCE & TECHNOLOGY", 
            university: "Sabaragamuwa University of Sri Lanka", 
            districtRequirements: { 'Colombo':1.3571, 'Gampaha':1.2593, 'Kalutara':1.4426, 'Matale':1.1763, 'Kandy':1.1115, 'Nuwara Eliya':1.0500, 'Galle':1.4051, 'Matara':1.3730, 'Hambantota':"NQC", 'Jaffna':"NQC", 'Kilinochchi':1.1019, 'Mannar':1.2822, 'Mullaitivu':1.3428, 'Vavuniya':1.0429, 'Trincomalee':1.1645, 'Batticaloa':1.2097, 'Ampara':1.1779, 'Puttalam':1.0350, 'Kurunegala':1.3214, 'Anuradhapura':1.0521, 'Polonnaruwa':0.9454, 'Badulla':1.1412, 'Monaragala':1.3009, 'Kegalle':1.2941, 'Ratnapura':1.2154}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },
        { 
            name: "BIOLOGICAL SCIENCE", 
            university: "University of Colombo", 
            districtRequirements: { 'Colombo':1.5982, 'Gampaha':1.6014, 'Kalutara':1.5932, 'Matale':"NQC", 'Kandy':1.6031, 'Nuwara Eliya':"NQC", 'Galle':1.5974, 'Matara':1.6141, 'Hambantota':1.6106, 'Jaffna':1.6491, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':1.6068, 'Puttalam':1.6170, 'Kurunegala':1.6216, 'Anuradhapura':1.0521, 'Polonnaruwa':"NQC", 'Badulla':1.6537, 'Monaragala':"NQC", 'Kegalle':1.6180, 'Ratnapura':1.5955}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
//------------------------page2
        { 
            name: "BIOLOGICAL SCIENCE", 
            university: "University of Peradeniya", 
            districtRequirements: { 'Colombo':1.4293, 'Gampaha':1.4238, 'Kalutara':1.4375, 'Matale':1.5053, 'Kandy':1.4175, 'Nuwara Eliya':"NQC", 'Galle':1.4172, 'Matara':1.4226, 'Hambantota':1.4273, 'Jaffna':1.4511, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.4192, 'Batticaloa':1.5038, 'Ampara':"NQC", 'Puttalam':1.4391, 'Kurunegala':1.4165, 'Anuradhapura':1.4595, 'Polonnaruwa':"NQC", 'Badulla':1.4312, 'Monaragala':1.4993, 'Kegalle':1.4343, 'Ratnapura':1.4190}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "BIOLOGICAL SCIENCE", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo':1.3093, 'Gampaha':1.3236, 'Kalutara':1.3093, 'Matale':1.3551, 'Kandy':1.3109, 'Nuwara Eliya':"NQC", 'Galle':1.3195, 'Matara':1.3103, 'Hambantota':1.3119, 'Jaffna':1.3328, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.3766, 'Batticaloa':1.3365, 'Ampara':1.3223, 'Puttalam':1.3112, 'Kurunegala':1.3109, 'Anuradhapura':1.3195, 'Polonnaruwa':"NQC", 'Badulla':1.3184, 'Monaragala':1.3949, 'Kegalle':1.3208, 'Ratnapura':1.3121}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "BIOLOGICAL SCIENCE", 
            university: "University of Kelaniya", 
            districtRequirements: { 'Colombo':1.2328, 'Gampaha':1.2275, 'Kalutara':1.2257, 'Matale':1.2876, 'Kandy':1.2349, 'Nuwara Eliya':1.3065, 'Galle':1.2282, 'Matara':1.2297, 'Hambantota':1.2442, 'Jaffna':1.2634, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.2389, 'Trincomalee':"NQC", 'Batticaloa':1.2483, 'Ampara':1.2325, 'Puttalam':1.2578, 'Kurunegala':1.2277, 'Anuradhapura':1.2341, 'Polonnaruwa':"NQC", 'Badulla':1.2406, 'Monaragala':1.2896, 'Kegalle':1.2332, 'Ratnapura':1.2282}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "BIOLOGICAL SCIENCE", 
            university: "University of Jaffna", 
            districtRequirements: { 'Colombo':1.0115, 'Gampaha':0.8881, 'Kalutara':1.1666, 'Matale':0.9068, 'Kandy':0.9725, 'Nuwara Eliya':0.9122, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':0.9197, 'Jaffna':1.0082, 'Kilinochchi':0.9132, 'Mannar':"NQC", 'Mullaitivu':0.9179, 'Vavuniya':1.1751, 'Trincomalee':0.9871, 'Batticaloa':1.0014, 'Ampara':0.8995, 'Puttalam':0.9048, 'Kurunegala':1.0926, 'Anuradhapura':0.8982, 'Polonnaruwa':0.9443, 'Badulla':0.9045, 'Monaragala':0.9548, 'Kegalle':1.1569, 'Ratnapura':0.8876}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "BIOLOGICAL SCIENCE", 
            university: "University of Ruhuna", 
            districtRequirements: { 'Colombo':1.0732, 'Gampaha':1.0822, 'Kalutara':1.1478, 'Matale':1.0788, 'Kandy':1.0802, 'Nuwara Eliya':1.0935, 'Galle':1.0850, 'Matara':1.0802, 'Hambantota':1.0923, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':1.0716, 'Ampara':1.0800, 'Puttalam':1.0856, 'Kurunegala':1.0851, 'Anuradhapura':1.1203, 'Polonnaruwa':1.1076, 'Badulla':1.0729, 'Monaragala':1.1236, 'Kegalle':1.0843, 'Ratnapura':1.0738}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "BIOLOGICAL SCIENCE", 
            university: "Eastern University, Sri Lanka", 
            districtRequirements: { 'Colombo':0.9949, 'Gampaha':0.7536, 'Kalutara':"NQC", 'Matale':0.7822, 'Kandy':"NQC", 'Nuwara Eliya':0.4179, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':0.8596, 'Jaffna':"NQC", 'Kilinochchi':0.8409, 'Mannar':0.8468, 'Mullaitivu':0.8390, 'Vavuniya':0.8075, 'Trincomalee':0.9962, 'Batticaloa':0.7572, 'Ampara':0.8038, 'Puttalam':0.7416, 'Kurunegala':"NQC", 'Anuradhapura':0.7564, 'Polonnaruwa':0.7709, 'Badulla':0.7613, 'Monaragala':0.7820, 'Kegalle':"NQC", 'Ratnapura':0.7368}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "BIOLOGICAL SCIENCE", 
            university: "South Eastern University of Sri Lanka", 
            districtRequirements: { 'Colombo':0.9968, 'Gampaha':0.5734, 'Kalutara':"NQC", 'Matale':0.7426, 'Kandy':0.9790, 'Nuwara Eliya':0.7490, 'Galle':1.1413, 'Matara':"NQC", 'Hambantota':0.7948, 'Jaffna':"NQC", 'Kilinochchi':0.6308, 'Mannar':0.2566, 'Mullaitivu':"NQC", 'Vavuniya':0.4457, 'Trincomalee':0.5396, 'Batticaloa':0.6869, 'Ampara':0.8888, 'Puttalam':0.5876, 'Kurunegala':"NQC", 'Anuradhapura':0.5119, 'Polonnaruwa':0.3551, 'Badulla':0.6449, 'Monaragala':0.4781, 'Kegalle':"NQC", 'Ratnapura':0.6316}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "APPLIED SCIENCES (BIO.SC)", 
            university: "Rajarata University of Sri Lanka", 
            districtRequirements: { 'Colombo':0.8250, 'Gampaha':0.8043, 'Kalutara':0.8608, 'Matale':0.8306, 'Kandy':0.8545, 'Nuwara Eliya':0.8315, 'Galle':0.8240, 'Matara':0.8412, 'Hambantota':0.8127, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':0.9068, 'Ampara':"NQC", 'Puttalam':0.8286, 'Kurunegala':0.8467, 'Anuradhapura':0.8329, 'Polonnaruwa':0.8636, 'Badulla':0.8008, 'Monaragala':0.8673, 'Kegalle':0.8766, 'Ratnapura':0.8098}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "APPLIED SCIENCES (BIO.SC)", 
            university: "Sabaragamuwa University of Sri Lanka)", 
            districtRequirements: { 'Colombo':0.8950, 'Gampaha':0.8890, 'Kalutara':0.8937, 'Matale':0.8306, 'Kandy':0.9110, 'Nuwara Eliya':"NQC", 'Galle':0.8943, 'Matara':0.9447, 'Hambantota':0.9282, 'Jaffna':0.9571, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':0.9495, 'Puttalam':"NQC", 'Kurunegala':0.8908, 'Anuradhapura':0.9604, 'Polonnaruwa':"NQC", 'Badulla':0.8918, 'Monaragala':"NQC", 'Kegalle':0.9010, 'Ratnapura':0.9405}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "APPLIED SCIENCES (BIO.SC)", 
            university: "University of Vavuniya, Sri Lanka)", 
            districtRequirements: { 'Colombo':0.6625, 'Gampaha':0.5294, 'Kalutara':"NQC", 'Matale':"NQC", 'Kandy':"NQC", 'Nuwara Eliya':0.3792, 'Galle':"NQC", 'Matara':0.7164, 'Hambantota':0.6722, 'Jaffna':0.7369, 'Kilinochchi':0.5981, 'Mannar':0.2480, 'Mullaitivu':0.6331, 'Vavuniya':0.5052, 'Trincomalee':0.4815, 'Batticaloa':0.6373, 'Ampara':0.6575, 'Puttalam':0.4939, 'Kurunegala':"NQC", 'Anuradhapura':0.4826, 'Polonnaruwa':0.3594, 'Badulla':0.6691, 'Monaragala':0.4600, 'Kegalle':"NQC", 'Ratnapura':0.5332}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "ENGINEERING", 
            university: "University of Peradeniya", 
            districtRequirements: { 'Colombo': 1.9034, 'Gampaha': 1.9033, 'Kalutara':1.9109, 'Matale':1.9649, 'Kandy':1.9075, 'Nuwara Eliya':1.9770, 'Galle':1.9115, 'Matara':1.9095, 'Hambantota':1.9035, 'Jaffna':1.9054, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.9561, 'Trincomalee':1.9674, 'Batticaloa':1.9032, 'Ampara':1.9111, 'Puttalam':1.9303, 'Kurunegala':1.9069, 'Anuradhapura':1.9101, 'Polonnaruwa':1.9099, 'Badulla':1.9119, 'Monaragala':1.9073, 'Kegalle':1.9081, 'Ratnapura':1.9074},  
            requiredSubjects: ["Combined Mathematics", "Physics", "Chemistry"] 
        },
        { 
            name: "ENGINEERING", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo': 1.7762, 'Gampaha': 1.7618, 'Kalutara':1.7647, 'Matale':"NQC", 'Kandy':1.7482, 'Nuwara Eliya':"NQC", 'Galle':1.7652, 'Matara':1.7507, 'Hambantota':1.7631, 'Jaffna':1.7800, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.8165, 'Trincomalee':1.8803, 'Batticaloa':1.8462, 'Ampara':"NQC", 'Puttalam':1.7810, 'Kurunegala':1.7552, 'Anuradhapura':1.8694, 'Polonnaruwa':1.8118, 'Badulla':1.9777, 'Monaragala':"NQC", 'Kegalle':1.7507, 'Ratnapura':1.8441}, 
            requiredSubjects: ["Combined Mathematics", "Physics", "Chemistry"] 
        },
        { 
            name: "ENGINEERING", 
            university: "University of Jaffna", 
            districtRequirements: { 'Colombo': "NQC", 'Gampaha': 1.4031, 'Kalutara':"NQC", 'Matale':1.3920, 'Kandy':1.5391, 'Nuwara Eliya':1.3978, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':"NQC", 'Jaffna':"NQC", 'Kilinochchi':1.3255, 'Mannar':1.3880, 'Mullaitivu':1.3682, 'Vavuniya':1.3911, 'Trincomalee':1.3429, 'Batticaloa':1.4842, 'Ampara':1.3419, 'Puttalam':1.3371, 'Kurunegala':"NQC", 'Anuradhapura':1.3887, 'Polonnaruwa':1.4474, 'Badulla':1.5255, 'Monaragala':1.3542, 'Kegalle':"NQC", 'Ratnapura':1.4062}, 
            requiredSubjects: ["Combined Mathematics", "Physics", "Chemistry"] 
        },
        { 
            name: "ENGINEERING", 
            university: "University of Ruhuna", 
            districtRequirements: { 'Colombo': 1.6861, 'Gampaha':1.6079, 'Kalutara':1.6421, 'Matale':1.6520, 'Kandy':1.6097, 'Nuwara Eliya':1.6081, 'Galle':1.7063, 'Matara':1.7840, 'Hambantota':1.6355, 'Jaffna':"NQC", 'Kilinochchi':1.6368, 'Mannar':1.6789, 'Mullaitivu':1.6311, 'Vavuniya':1.6191, 'Trincomalee':1.6188, 'Batticaloa':1.6126, 'Ampara':1.6166, 'Puttalam':1.6414, 'Kurunegala':1.6211, 'Anuradhapura':1.6126, 'Polonnaruwa':1.6687, 'Badulla':1.6080, 'Monaragala':1.6237, 'Kegalle':1.6435, 'Ratnapura':1.6228}, 
            requiredSubjects: ["Combined Mathematics", "Physics", "Chemistry"] 
        },
        { 
            name: "ENGINEERING", 
            university: "University of Moratuwa", 
            districtRequirements: { 'Colombo': 2.1036, 'Gampaha':2.1067, 'Kalutara':2.1193, 'Matale':2.1393, 'Kandy':2.1072, 'Nuwara Eliya':2.1524, 'Galle':2.1010, 'Matara':2.1146, 'Hambantota':2.1096, 'Jaffna':2.1167, 'Kilinochchi':2.1492, 'Mannar':2.2964, 'Mullaitivu':2.2964, 'Vavuniya':"NQC", 'Trincomalee':2.1726, 'Batticaloa':2.2361, 'Ampara':2.1492, 'Puttalam':2.1101, 'Kurunegala':2.1492, 'Anuradhapura':2.1096, 'Polonnaruwa':2.2829, 'Badulla':2.1020, 'Monaragala':2.1015, 'Kegalle':2.1115, 'Ratnapura':2.1048}, 
            requiredSubjects: ["Combined Mathematics", "Physics", "Chemistry"] 
        },
        { 
            name: "ENGINEERING", 
            university: "South Eastern University of Sri Lanka", 
            districtRequirements: { 'Colombo': "NQC", 'Gampaha':"NQC", 'Kalutara':"NQC", 'Matale':1.0985, 'Kandy':1.5351, 'Nuwara Eliya':0.7247, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':"NQC", 'Jaffna':"NQC", 'Kilinochchi':1.2605, 'Mannar':1.1786, 'Mullaitivu':0.8143, 'Vavuniya':1.3571, 'Trincomalee':1.2946, 'Batticaloa':1.5402, 'Ampara':1.3775, 'Puttalam':1.2173, 'Kurunegala':"NQC", 'Anuradhapura':"NQC", 'Polonnaruwa':0.7871, 'Badulla':"NQC", 'Monaragala':1.3110, 'Kegalle':"NQC", 'Ratnapura':1.4407}, 
            requiredSubjects: ["Combined Mathematics", "Physics", "Chemistry"] 
        },
        { 
            name: "ENGINEERING (EM)", 
            university: "University of Moratuwa", 
            districtRequirements: { 'Colombo': 1.5225, 'Gampaha':1.3772, 'Kalutara':1.5348, 'Matale':1.4027, 'Kandy':1.4557, 'Nuwara Eliya':1.2708, 'Galle':1.4786, 'Matara':1.5106, 'Hambantota':1.5290, 'Jaffna':1.4386, 'Kilinochchi':1.0771, 'Mannar':1.1130, 'Mullaitivu':0.9722, 'Vavuniya':1.1943, 'Trincomalee':1.2499, 'Batticaloa':1.4094, 'Ampara':1.2183, 'Puttalam':1.3329, 'Kurunegala':1.5353, 'Anuradhapura':1.3221, 'Polonnaruwa':1.0241, 'Badulla':1.4543, 'Monaragala':1.4088, 'Kegalle':1.5044, 'Ratnapura':1.4393}, 
            requiredSubjects: ["Combined Mathematics", "Physics", "Chemistry"] 
        },
        { 
            name: "ENGINEERING (TM)", 
            university: "University of Moratuwa", 
            districtRequirements: { 'Colombo': 1.4990, 'Gampaha':1.3972, 'Kalutara':1.5398, 'Matale':1.3238, 'Kandy':1.4391, 'Nuwara Eliya':1.2167, 'Galle':1.5052, 'Matara':1.5306, 'Hambantota':1.4986, 'Jaffna':1.4641, 'Kilinochchi':1.2035, 'Mannar':1.0115, 'Mullaitivu':0.7608, 'Vavuniya':1.1720, 'Trincomalee':1.2394, 'Batticaloa':1.3920, 'Ampara':1.1729, 'Puttalam':1.3391, 'Kurunegala':1.5258, 'Anuradhapura':1.3281, 'Polonnaruwa':1.2206, 'Badulla':1.4500, 'Monaragala':1.5479, 'Kegalle':1.5247, 'Ratnapura':1.4481}, 
            requiredSubjects: ["Combined Mathematics", "Physics", "Chemistry"] 
        },
        { 
            name: "QUANTITY SURVEYING", 
            university: "University of Moratuwa", 
            districtRequirements: { 'Colombo': 1.3200, 'Gampaha':1.3058, 'Kalutara':1.2950, 'Matale':1.2051, 'Kandy':1.2720, 'Nuwara Eliya':0.8566, 'Galle':1.3452, 'Matara':1.3892, 'Hambantota':1.3718, 'Jaffna':1.3571, 'Kilinochchi':1.2397, 'Mannar':1.1677, 'Mullaitivu':0.7110, 'Vavuniya':1.2551, 'Trincomalee':1.1011, 'Batticaloa':1.3807, 'Ampara':1.1659, 'Puttalam':1.1705, 'Kurunegala':1.3547, 'Anuradhapura':1.2083, 'Polonnaruwa':0.8628, 'Badulla':1.3308, 'Monaragala':1.2582, 'Kegalle':1.3776, 'Ratnapura':1.3091}, 
            requiredSubjects: ["Higher Mathematics","Combined Mathematics", "Physics", "Chemistry","Accounting","Economics","Business Statistics","Business Studies","Information & Communication Technology"] 
        },
        { 
            name: "COMPUTER SCIENCE", 
            university: "University of Colombo School of Computing", 
            districtRequirements: { 'Colombo': 1.6123, 'Gampaha':1.6342, 'Kalutara':1.6319, 'Matale':1.8713, 'Kandy':1.6176, 'Nuwara Eliya':1.7593, 'Galle':1.6196, 'Matara':1.6129, 'Hambantota':1.6148, 'Jaffna':1.6366, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.8869, 'Trincomalee':"NQC", 'Batticaloa':2.2870, 'Ampara':"NQC", 'Puttalam':1.7712, 'Kurunegala':1.6149, 'Anuradhapura':1.6293, 'Polonnaruwa':1.6465, 'Badulla':1.8790, 'Monaragala':1.6545, 'Kegalle':1.6197, 'Ratnapura':1.6347}, 
            requiredSubjects: ["Higher Mathematics","Mathematics","Combined Mathematics", "Physics", "Chemistry","Information & Communication Technology"] 
        },
        { 
            name: "COMPUTER SCIENCE", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo':1.5054, 'Gampaha':1.5127, 'Kalutara':1.5057, 'Matale':"NQC", 'Kandy':1.5137, 'Nuwara Eliya':"NQC", 'Galle':1.5121, 'Matara':1.5127, 'Hambantota':1.5117, 'Jaffna':1.5073, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':"NQC", 'Kurunegala':1.5103, 'Anuradhapura':"NQC", 'Polonnaruwa':"NQC", 'Badulla':"NQC", 'Monaragala':"NQC", 'Kegalle':1.5524, 'Ratnapura':1.5303}, 
            requiredSubjects: ["Higher Mathematics","Mathematics","Combined Mathematics", "Physics", "Chemistry","Information & Communication Technology"] 
        },
        { 
            name: "COMPUTER SCIENCE", 
            university: "University of Sri Jayewardenepura", 
            districtRequirements: { 'Colombo':1.5246, 'Gampaha':1.5586, 'Kalutara':1.5193, 'Matale':"NQC", 'Kandy':1.5380, 'Nuwara Eliya':"NQC", 'Galle':1.5537, 'Matara':1.5253, 'Hambantota':1.5284, 'Jaffna':1.5575, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.5422, 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':"NQC", 'Kurunegala':1.5525, 'Anuradhapura':"NQC", 'Polonnaruwa':"NQC", 'Badulla':"NQC", 'Monaragala':"NQC", 'Kegalle':1.5784, 'Ratnapura':1.5353}, 
            requiredSubjects: ["Higher Mathematics","Mathematics","Combined Mathematics", "Physics", "Chemistry","Information & Communication Technology"] 
        },
        { 
            name: "COMPUTER SCIENCE", 
            university: "University of Kelaniya", 
            districtRequirements: { 'Colombo':1.5246, 'Gampaha':1.5586, 'Kalutara':1.5193, 'Matale':"NQC", 'Kandy':1.5380, 'Nuwara Eliya':"NQC", 'Galle':1.5537, 'Matara':1.5253, 'Hambantota':1.5284, 'Jaffna':1.5575, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.5422, 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':"NQC", 'Kurunegala':1.5525, 'Anuradhapura':"NQC", 'Polonnaruwa':"NQC", 'Badulla':"NQC", 'Monaragala':"NQC", 'Kegalle':1.5784, 'Ratnapura':1.5353}, 
            requiredSubjects: ["Higher Mathematics","Mathematics","Combined Mathematics", "Physics", "Chemistry","Information & Communication Technology"] 
        },
        { 
            name: "COMPUTER SCIENCE", 
            university: "University of Jaffna", 
            districtRequirements: { 'Colombo':1.2741, 'Gampaha':1.1092, 'Kalutara':"NQC", 'Matale':1.2467, 'Kandy':1.1251, 'Nuwara Eliya':"NQC", 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':"NQC", 'Jaffna':1.3709, 'Kilinochchi':1.2027, 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.2433, 'Trincomalee':1.2893, 'Batticaloa':1.1515, 'Ampara':1.1527, 'Puttalam':1.1268, 'Kurunegala':1.1948, 'Anuradhapura':1.1079, 'Polonnaruwa':"NQC", 'Badulla':1.1610, 'Monaragala':1.1033, 'Kegalle':1.2459, 'Ratnapura':1.1817}, 
            requiredSubjects: ["Higher Mathematics","Mathematics","Combined Mathematics", "Physics", "Chemistry","Information & Communication Technology"] 
        },
        { 
            name: "COMPUTER SCIENCE", 
            university: "University of Ruhuna", 
            districtRequirements: { 'Colombo':1.3257, 'Gampaha':1.3241, 'Kalutara':1.4002, 'Matale':"NQC", 'Kandy':1.3349, 'Nuwara Eliya':"NQC", 'Galle':1.3671, 'Matara':1.4776, 'Hambantota':1.4149, 'Jaffna':1.3711, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':"NQC", 'Kurunegala':1.3281, 'Anuradhapura':1.3514, 'Polonnaruwa':"NQC", 'Badulla':1.3583, 'Monaragala':"NQC", 'Kegalle':1.3279, 'Ratnapura':1.3333}, 
            requiredSubjects: ["Higher Mathematics","Mathematics","Combined Mathematics", "Physics", "Chemistry","Information & Communication Technology"] 
        },
        { 
            name: "COMPUTER SCIENCE", 
            university: "Eastern University - Trincomalee Campus", 
            districtRequirements: { 'Colombo':"NQC", 'Gampaha':1.1211, 'Kalutara':"NQC", 'Matale':0.8035, 'Kandy':0.8446, 'Nuwara Eliya':"NQC", 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':"NQC", 'Jaffna':"NQC", 'Kilinochchi':0.89071, 'Mannar':0.5131, 'Mullaitivu':0.6127, 'Vavuniya':0.7283, 'Trincomalee':0.7455, 'Batticaloa':1.0560, 'Ampara':0.8677, 'Puttalam':0.6784, 'Kurunegala':"NQC", 'Anuradhapura':0.7886, 'Polonnaruwa':0.5547, 'Badulla':1.1729, 'Monaragala':0.8722, 'Kegalle':"NQC", 'Ratnapura':1.2067}, 
            requiredSubjects: ["Higher Mathematics","Mathematics","Combined Mathematics", "Physics", "Chemistry","Information & Communication Technology"] 
        },
        { 
            name: "PHYSICAL SCIENCE", 
            university: "University of Colombo", 
            districtRequirements: { 'Colombo':1.2613, 'Gampaha':1.2675, 'Kalutara':1.2645, 'Matale':"NQC", 'Kandy':1.2615, 'Nuwara Eliya':"NQC", 'Galle':1.2617, 'Matara':1.2642, 'Hambantota':1.2677, 'Jaffna':1.2689, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.3205, 'Batticaloa':1.3694, 'Ampara':1.6380, 'Puttalam':1.3690, 'Kurunegala':1.2604, 'Anuradhapura':1.3592, 'Polonnaruwa':2.2960, 'Badulla':1.2654, 'Monaragala':"NQC", 'Kegalle':1.2610, 'Ratnapura':1.2627}, 
            requiredSubjects: ["Higher Mathematics","Combined Mathematics", "Agricultural Science","Biology","Physics", "Chemistry","Information & Communication Technology"] 
        },
        { 
            name: "PHYSICAL SCIENCE", 
            university: "University of Peradeniya", 
            districtRequirements: { 'Colombo':1.1588, 'Gampaha':1.1551, 'Kalutara':1.1531, 'Matale':1.1639, 'Kandy':1.1531, 'Nuwara Eliya':1.3844, 'Galle':1.1534, 'Matara':1.1622, 'Hambantota':1.1700, 'Jaffna':1.1636, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':1.1531, 'Kurunegala':1.1574, 'Anuradhapura':1.1641, 'Polonnaruwa':"NQC", 'Badulla':1.1581, 'Monaragala':1.1978, 'Kegalle':1.1635, 'Ratnapura':1.1557}, 
            requiredSubjects: ["Higher Mathematics","Combined Mathematics", "Agricultural Science","Biology","Physics", "Chemistry","Information & Communication Technology"] 
        },



//-------------------------page3
{ 
    name: "PHYSICAL SCIENCE", 
    university: "University of Sri Jayewardenepura", 
    districtRequirements: { 'Colombo':1.0756, 'Gampaha':1.0759, 'Kalutara':1.0801, 'Matale':1.0797, 'Kandy':1.0725, 'Nuwara Eliya':"NQC", 'Galle':1.0726, 'Matara':1.0783, 'Hambantota':1.0747, 'Jaffna':1.0765, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':1.1048, 'Ampara':"NQC", 'Puttalam':1.1056, 'Kurunegala':1.0728, 'Anuradhapura':1.0811, 'Polonnaruwa':"NQC", 'Badulla':1.0947, 'Monaragala':1.1111, 'Kegalle':1.0721, 'Ratnapura':1.0801}, 
    requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology"] 
},

{ 
    name: "PHYSICAL SCIENCE", 
    university: "University of Kelaniya", 
    districtRequirements: { 'Colombo': 0.9845, 'Gampaha':0.9841, 'Kalutara':0.9862, 'Matale':0.9899, 'Kandy':0.9896, 'Nuwara Eliya':"NQC", 'Galle':0.9868, 'Matara':0.9925, 'Hambantota':0.9849, 'Jaffna':1.0002, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':0.9932, 'Ampara':1.0241, 'Puttalam':1.0236, 'Kurunegala':0.9851, 'Anuradhapura':1.0188, 'Polonnaruwa':"NQC", 'Badulla': 0.9844, 'Monaragala':0.9939, 'Kegalle':0.9858, 'Ratnapura':0.99171}, 
    requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology"] 
},

{ 
    name: "PHYSICAL SCIENCE", 
    university: "University of Jaffna", 
    districtRequirements: { 'Colombo': 0.8624, 'Gampaha':0.7250, 'Kalutara':0.7957, 'Matale':0.7004, 'Kandy':0.7059, 'Nuwara Eliya':"NQC", 'Galle':0.9686, 'Matara':"NQC", 'Hambantota':0.7826, 'Jaffna':0.7660, 'Kilinochchi':0.7308, 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':0.7277, 'Trincomalee':0.7051, 'Batticaloa':0.6974, 'Ampara':0.6966, 'Puttalam':0.7319, 'Kurunegala':0.7760, 'Anuradhapura':0.7020, 'Polonnaruwa': 0.7025, 'Badulla':0.7008, 'Monaragala':0.7174, 'Kegalle':0.8057, 'Ratnapura':0.7062}, 
    requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology"] 
},

{ 
    name: "PHYSICAL SCIENCE", 
    university: "University of Ruhuna", 
    districtRequirements: { 'Colombo':0.9020, 'Gampaha':0.9010, 'Kalutara':0.8991, 'Matale':0.9051, 'Kandy':0.9043, 'Nuwara Eliya':"NQC", 'Galle':0.9499, 'Matara':0.9064, 'Hambantota':0.9053, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':1.0094, 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':0.9038, 'Batticaloa':0.9065, 'Ampara':0.9064, 'Puttalam':0.9151, 'Kurunegala':0.8995, 'Anuradhapura':0.9203, 'Polonnaruwa':"NQC", 'Badulla':0.9010, 'Monaragala':0.9069, 'Kegalle':0.9070, 'Ratnapura':0.9014}, 
    requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology"] 
},

{ 
    name: "PHYSICAL SCIENCE", 
    university: "Eastern University, Sri Lanka", 
    districtRequirements: { 'Colombo':0.8582, 'Gampaha':0.7463, 'Kalutara':0.7833, 'Matale':0.5682, 'Kandy':0.7181, 'Nuwara Eliya':0.4653, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':0.7707, 'Jaffna':0.8687, 'Kilinochchi':0.6225, 'Mannar':0.4528, 'Mullaitivu':0.4382, 'Vavuniya':0.4678, 'Trincomalee':0.4719, 'Batticaloa':0.5306, 'Ampara':0.5841, 'Puttalam':0.4211, 'Kurunegala':0.7728, 'Anuradhapura':0.4441, 'Polonnaruwa':0.4181, 'Badulla':0.6326, 'Monaragala':0.6196, 'Kegalle':0.8641, 'Ratnapura':0.5878}, 
    requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology"] 
},

{ 
    name: "PHYSICAL SCIENCE", 
    university: "South Eastern University of Sri Lanka", 
    districtRequirements: { 'Colombo':0.8711, 'Gampaha':0.7804, 'Kalutara':0.8234, 'Matale':0.5741, 'Kandy':0.6947, 'Nuwara Eliya':0.0517, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':0.8599, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':0.0149, 'Mullaitivu':0.2835, 'Vavuniya':0.3035, 'Trincomalee':0.5409, 'Batticaloa':0.5543, 'Ampara':0.5742, 'Puttalam':0.3296, 'Kurunegala':0.7933, 'Anuradhapura':0.4329, 'Polonnaruwa':0.1972, 'Badulla':0.6695, 'Monaragala':0.6245, 'Kegalle':0.8421, 'Ratnapura':0.5882}, 
    requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology"] 
},



//-----------------------  
{ 
    name: "SURVEYING SCIENCE", 
    university: "Sabaragamuwa University of Sri Lanka", 
    districtRequirements: { 'Colombo':0.0887,'Gampaha':0.9417, 'Kalutara':1.0562, 'Matale':0.9743, 'Kandy':0.8958, 'Nuwara Eliya':0.6227, 'Galle':1.0750 ,'Matara':1.0723, 'Hambantota':1.1194, 'Jaffna':1.0978, 'Kilinochchi':0.9730, 'Mannar':0.9445, 'Mullaitivu':0.6239, 'Vavuniya':0.9950, 'Trincomalee':1.0721, 'Batticaloa':1.0850, 'Ampara':1.0476, 'Puttalam':0.9590, 'Kurunegala':1.0521, 'Anuradhapura':1.0297, 'Polonnaruwa':0.7790, 'Badulla':1.0278, 'Monaragala':1.0800, 'Kegalle':1.0232, 'Ratnapura':1.0664}, 
    requiredSubjects: ["Physics","Combined Mathematics ","Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","  Chinese"," Chemistry","Christian Civilization","  Christianity"," Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)"," Drama and Theatre (Sinhala)",  " Drama and Theatre (Tamil)"," Drama and Theatre (English)",
    " Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French","Food Technology","German","Greek and Roman Civilization","Hindi"," Hindu Civilization","Hinduism","History  of India","History of Europe","History of Modern World","Home Economics","Higher Mathematics","Islam","Islam Civilization","Information &Communication Technology","Japanese","Korean","Logic & Scientific Method","Mathematics","Mechnaical Technology","Oriental Music","Pali","Physics","Political Science","Russian","Sceince for Technology","Sanskrit",
    "Sinhala","Tamil","Western Music"]
   
    },

    { 
        name: "APPLIED SCIENCES (PHY.SC)", 
        university: "Rajarata University of Sri Lanka", 
        districtRequirements: { 'Colombo':0.7824, 'Gampaha':0.7987, 'Kalutara':0.7917, 'Matale':0.8444, 'Kandy':0.7813, 'Nuwara Eliya':"NQC", 'Galle':0.7814, 'Matara':0.7828, 'Hambantota':0.7879, 'Jaffna':0.8123, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':0.9540, 'Trincomalee':0.8370, 'Batticaloa':0.8026, 'Ampara':"NQC", 'Puttalam':0.8838, 'Kurunegala':0.7893, 'Anuradhapura':0.7943, 'Polonnaruwa':"NQC", 'Badulla':0.8027, 'Monaragala':"NQC", 'Kegalle':0.7839, 'Ratnapura':0.7793}, 
        requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology","Information & Communication Technology"] 
    },

    { 
        name: "APPLIED SCIENCES (PHY.SC)", 
        university: "Sabaragamuwa University of Sri Lanka", 
        districtRequirements: { 'Colombo':0.8672, 'Gampaha':0.8722, 'Kalutara':0.8644, 'Matale':0.8670, 'Kandy':0.8679, 'Nuwara Eliya':"NQC", 'Galle':0.8687, 'Matara':0.8658, 'Hambantota':0.8665, 'Jaffna':0.8810, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':0.8692, 'Batticaloa':"NQC", 'Ampara':0.8755, 'Puttalam':"NQC", 'Kurunegala':0.8686, 'Anuradhapura':"NQC", 'Polonnaruwa':"NQC", 'Badulla':0.9178, 'Monaragala':"NQC", 'Kegalle':0.8710, 'Ratnapura':0.8644}, 
        requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology","Information & Communication Technology"] 
    },

    { 
        name: "APPLIED SCIENCES (PHY.SC)", 
        university: "Wayamba University Of Sri Lanka", 
        districtRequirements: { 'Colombo':0.7205, 'Gampaha':0.7203, 'Kalutara':0.7300, 'Matale':0.7282, 'Kandy':0.7403, 'Nuwara Eliya':"NQC", 'Galle':0.7555, 'Matara':0.7653, 'Hambantota':0.7367, 'Jaffna':0.7368, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':0.8316, 'Ampara':"NQC", 'Puttalam':0.7392, 'Kurunegala':0.7227, 'Anuradhapura':0.7651, 'Polonnaruwa':"NQC", 'Badulla':0.7279, 'Monaragala':0.7200, 'Kegalle':0.7455, 'Ratnapura':0.7527}, 
        requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology","Information & Communication Technology"] 
    },

    { 
        name: "APPLIED SCIENCES (PHY.SC)", 
        university: "University of Vavuniya, Sri Lanka", 
        districtRequirements: { 'Colombo':0.6984, 'Gampaha':0.6915, 'Kalutara':0.7196, 'Matale':0.5601, 'Kandy':0.6379, 'Nuwara Eliya':"NQC", 'Galle':0.8560, 'Matara':0.7871, 'Hambantota':0.8102, 'Jaffna':0.7346, 'Kilinochchi':0.5737, 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':0.5509, 'Trincomalee':0.5703, 'Batticaloa':0.5681, 'Ampara':0.5333, 'Puttalam':0.5963, 'Kurunegala':0.6968, 'Anuradhapura':0.5270, 'Polonnaruwa':"NQC", 'Badulla':0.5684, 'Monaragala':0.5772, 'Kegalle':"NQC", 'Ratnapura':0.5703}, 
        requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology","Information & Communication Technology"] 
    },

    { 
        name: "APPLIED SCIENCES (PHY.SC)", 
        university: "Eastern University - Trincomalee Campus", 
        districtRequirements: { 'Colombo':0.7291, 'Gampaha':0.7146, 'Kalutara':0.7122, 'Matale':0.6412, 'Kandy':0.6542, 'Nuwara Eliya':0.0269, 'Galle':0.7741, 'Matara':"NQC", 'Hambantota':"NQC", 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':-0.0124, 'Mullaitivu':0.3395, 'Vavuniya':0.2761, 'Trincomalee':0.3900, 'Batticaloa':0.5803, 'Ampara':0.5292, 'Puttalam':0.2839, 'Kurunegala':0.7800, 'Anuradhapura':0.3973, 'Polonnaruwa':0.1646, 'Badulla':0.5756, 'Monaragala':0.5764, 'Kegalle':0.7715, 'Ratnapura':0.5091}, 
        requiredSubjects: ["Combined Mathematics", "Higher Mathematics", "Chemistry","Physics","Agricultural Science","Biology","Information & Communication Technology"] 
    },
    
    { 
        name: "MANAGEMENT", 
        university: "University of Colombo", 
        districtRequirements: { 'Colombo':1.7329, 'Gampaha':1.7343, 'Kalutara':1.7330, 'Matale':1.7558, 'Kandy':1.7370, 'Nuwara Eliya':1.7500, 'Galle':1.7330, 'Matara':1.7336, 'Hambantota':1.7340, 'Jaffna':1.7354, 'Kilinochchi':1.7334, 'Mannar':1.7605, 'Mullaitivu':1.7390, 'Vavuniya':1.7336, 'Trincomalee':1.7496, 'Batticaloa':1.7354, 'Ampara':1.7941, 'Puttalam':1.7333, 'Kurunegala':1.7324, 'Anuradhapura':1.7348, 'Polonnaruwa':1.7341, 'Badulla':1.7477, 'Monaragala':"NQC", 'Kegalle':1.7372, 'Ratnapura':1.7364}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
    },

    { 
        name: "MANAGEMENT", 
        university: "University of Peradeniya", 
        districtRequirements: { 'Colombo':1.5900, 'Gampaha':1.5872, 'Kalutara':1.5973, 'Matale':1.6036, 'Kandy':1.5880, 'Nuwara Eliya':1.5953, 'Galle':1.5885, 'Matara':1.5890, 'Hambantota':1.6067, 'Jaffna':1.6123, 'Kilinochchi':1.6123, 'Mannar':1.5879, 'Mullaitivu':1.6091, 'Vavuniya':1.6144, 'Trincomalee':1.6488, 'Batticaloa':1.5879, 'Ampara':1.5906, 'Puttalam':1.6067, 'Kurunegala':1.5884, 'Anuradhapura':1.6052, 'Polonnaruwa':1.5960, 'Badulla':1.6085, 'Monaragala':1.6203, 'Kegalle':1.5954, 'Ratnapura':1.5955}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
},

    
    { 
        name: "MANAGEMENT", 
        university: "University of Sri Jayewardenepura", 
        districtRequirements: { 'Colombo':1.7810, 'Gampaha':1.8011, 'Kalutara':1.8042, 'Matale':1.7898, 'Kandy':1.7995, 'Nuwara Eliya':1.7863, 'Galle':1.7936, 'Matara':1.7827, 'Hambantota':1.7847, 'Jaffna':1.8025, 'Kilinochchi':"NQC", 'Mannar':1.9060, 'Mullaitivu':1.8368, 'Vavuniya':1.8014, 'Trincomalee':1.7897, 'Batticaloa':1.7978, 'Ampara':1.9218, 'Puttalam':1.7979, 'Kurunegala':1.7843, 'Anuradhapura':1.7928, 'Polonnaruwa':1.8066, 'Badulla':1.8237, 'Monaragala':1.8236, 'Kegalle':1.7889, 'Ratnapura':1.7846}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
    },
    
    
    { 
        name: "MANAGEMENT", 
        university: "University of Kelaniya", 
        districtRequirements: { 'Colombo':1.6379, 'Gampaha':1.6373, 'Kalutara':1.6367, 'Matale':1.6552, 'Kandy':1.6381, 'Nuwara Eliya':1.6374, 'Galle':1.6367, 'Matara':1.6442, 'Hambantota':1.6599, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.6505, 'Batticaloa':1.6562, 'Ampara':1.6367, 'Puttalam':1.6374, 'Kurunegala':1.6378, 'Anuradhapura':1.6391, 'Polonnaruwa':1.6578, 'Badulla':1.6429, 'Monaragala':1.6521, 'Kegalle':1.6410, 'Ratnapura':1.6415}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
    },

    { 
        name: "MANAGEMENT", 
        university: "University of Jaffna", 
        districtRequirements: { 'Colombo':1.3185, 'Gampaha':1.3153, 'Kalutara':1.3944, 'Matale':1.2494, 'Kandy':1.3052, 'Nuwara Eliya':1.1790, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':1.0906, 'Jaffna':1.0660, 'Kilinochchi':1.0988, 'Mannar':1.0787, 'Mullaitivu':1.2681, 'Vavuniya':1.1649, 'Trincomalee':1.0712, 'Batticaloa':1.1708, 'Ampara':1.0813, 'Puttalam':1.1731, 'Kurunegala':1.3620, 'Anuradhapura':1.2147, 'Polonnaruwa':1.1787, 'Badulla':1.1799, 'Monaragala':1.3498, 'Kegalle':1.3248, 'Ratnapura':1.2444}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
    },

    { 
        name: "MANAGEMENT", 
        university: "University of Ruhuna", 
        districtRequirements: { 'Colombo':1.4181, 'Gampaha':1.4148, 'Kalutara':1.4149, 'Matale':1.4304, 'Kandy':1.4162, 'Nuwara Eliya':1.4201, 'Galle':1.4188, 'Matara':1.4193, 'Hambantota':1.4305, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.4779, 'Batticaloa':1.5693, 'Ampara':1.4174, 'Puttalam':1.4582, 'Kurunegala':1.4152, 'Anuradhapura':1.4267, 'Polonnaruwa':1.4189, 'Badulla':1.4150, 'Monaragala':1.4148, 'Kegalle':1.4199, 'Ratnapura':1.4227}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
    },

    { 
        name: "MANAGEMENT", 
        university: "Eastern University, Sri Lanka", 
        districtRequirements: { 'Colombo':1.3413, 'Gampaha':"NQC", 'Kalutara':"NQC", 'Matale':"NQC", 'Kandy':1.2984, 'Nuwara Eliya':1.1832, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':1.0918, 'Jaffna':1.0089, 'Kilinochchi':1.0157, 'Mannar':1.3019, 'Mullaitivu':"NQC", 'Vavuniya':1.2047, 'Trincomalee':1.0857, 'Batticaloa':1.1723, 'Ampara':1.0898, 'Puttalam':1.2032, 'Kurunegala':"NQC", 'Anuradhapura':1.2359, 'Polonnaruwa':1.2355, 'Badulla':1.1800, 'Monaragala':"NQC", 'Kegalle':"NQC", 'Ratnapura':1.2459}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
    },

    { 
        name: "MANAGEMENT", 
        university: "South Eastern University of Sri Lanka", 
        districtRequirements: { 'Colombo':1.3382, 'Gampaha':1.3219, 'Kalutara':"NQC", 'Matale':"NQC", 'Kandy':1.3284, 'Nuwara Eliya':1.2130, 'Galle':1.3444, 'Matara':"NQC", 'Hambantota':1.1000, 'Jaffna':1.1683, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.2397, 'Trincomalee':1.0700, 'Batticaloa':1.2038, 'Ampara':1.0880, 'Puttalam':1.2147, 'Kurunegala':"NQC", 'Anuradhapura':"NQC", 'Polonnaruwa':1.1607, 'Badulla':1.1784, 'Monaragala':"NQC", 'Kegalle':"NQC", 'Ratnapura':1.2544}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
    },

    { 
        name: "MANAGEMENT", 
        university: "Rajarata University of Sri Lanka", 
        districtRequirements: { 'Colombo':1.3185, 'Gampaha':1.3109, 'Kalutara':1.3781, 'Matale':1.2853, 'Kandy':1.2886, 'Nuwara Eliya':1.2886, 'Galle':1.3447, 'Matara':"NQC", 'Hambantota':1.2875, 'Jaffna':1.4507, 'Kilinochchi':"NQC", 'Mannar':1.3341, 'Mullaitivu':1.5812, 'Vavuniya':1.3520, 'Trincomalee':1.3050, 'Batticaloa':1.2869, 'Ampara':1.2945, 'Puttalam':1.2859, 'Kurunegala':1.3607, 'Anuradhapura':1.2844, 'Polonnaruwa':1.2919, 'Badulla':1.2889, 'Monaragala':1.2884, 'Kegalle':1.3205, 'Ratnapura':1.2849}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
    },
   
    { 
        name: "MANAGEMENT", 
        university: "Sabaragamuwa University of Sri Lanka", 
        districtRequirements: { 'Colombo':1.3542, 'Gampaha':1.3554, 'Kalutara':1.3689, 'Matale':1.3553, 'Kandy':1.3602, 'Nuwara Eliya':1.3637, 'Galle':1.3555, 'Matara':1.3738, 'Hambantota':1.3555, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':1.3933, 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':1.3558, 'Puttalam':1.3618, 'Kurunegala':1.3602, 'Anuradhapura':1.3634, 'Polonnaruwa':1.3637, 'Badulla':1.3557, 'Monaragala':1.3561, 'Kegalle':1.3571, 'Ratnapura':1.3617}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
},

    { 
        name: "MANAGEMENT", 
        university: "Wayamba University of Sri Lanka", 
        districtRequirements: { 'Colombo':1.3712, 'Gampaha':1.3721, 'Kalutara':1.3744, 'Matale':1.3730, 'Kandy':1.3758, 'Nuwara Eliya':1.3760, 'Galle':1.3951, 'Matara':1.4059, 'Hambantota':1.3878, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':1.3966, 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.3702, 'Batticaloa':"NQC", 'Ampara':1.3894, 'Puttalam':1.3742, 'Kurunegala':1.3702, 'Anuradhapura':1.3724, 'Polonnaruwa':1.3867, 'Badulla':1.3822, 'Monaragala':1.3938, 'Kegalle':1.3728, 'Ratnapura':1.3737}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
},

{              
         name: "REAL ESTATE MANAGEMENT & VALUATION", 
         university: "University of Sri Jayewardenepura", 
        districtRequirements: { 'Colombo':1.5794, 'Gampaha':1.5395, 'Kalutara':1.4638, 'Matale':1.4628, 'Kandy':1.5496, 'Nuwara Eliya':1.5619, 'Galle':1.5527, 'Matara':1.5894, 'Hambantota':1.5439, 'Jaffna':1.3482, 'Kilinochchi':1.2899, 'Mannar':1.5419, 'Mullaitivu':1.2196, 'Vavuniya':1.5189, 'Trincomalee':1.4408, 'Batticaloa':1.4687, 'Ampara':1.5224, 'Puttalam':1.3410, 'Kurunegala':1.5379, 'Anuradhapura':1.5616, 'Polonnaruwa':1.5306, 'Badulla':1.5272, 'Monaragala':1.5169, 'Kegalle':1.5302, 'Ratnapura':1.5830}, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
},

    {              
        name: "COMMERCE", 
        university: "University of Sri Jayewardenepura", 
       districtRequirements: { 'Colombo':1.6096, 'Gampaha':1.6071, 'Kalutara':1.6094, 'Matale':1.6053, 'Kandy':1.6095, 'Nuwara Eliya':1.6472, 'Galle':1.6072, 'Matara':1.6053, 'Hambantota':1.6351, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.6367, 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':1.6282, 'Puttalam':"NQC", 'Kurunegala':1.6062, 'Anuradhapura':1.6294, 'Polonnaruwa':1.6160, 'Badulla':1.6169, 'Monaragala':"NQC", 'Kegalle':1.6071, 'Ratnapura':1.6159}, 
       requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
},




   {              
    name: "COMMERCE", 
    university: "University of Kelaniya", 
   districtRequirements: { 'Colombo':1.4831, 'Gampaha':1.4869, 'Kalutara':1.4844, 'Matale':1.5017, 'Kandy':1.4844, 'Nuwara Eliya':1.5037, 'Galle':1.4871, 'Matara':1.4943, 'Hambantota':1.4862, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':1.4856, 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':1.4849, 'Puttalam':1.5497, 'Kurunegala':1.4926, 'Anuradhapura':1.4956, 'Polonnaruwa':1.5814, 'Badulla':1.4928, 'Monaragala':1.5037, 'Kegalle':1.4939, 'Ratnapura':1.5002}, 
   requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
},

{              
name: "COMMERCE", 
university: "University of Jaffna", 
districtRequirements: { 'Colombo':1.2849, 'Gampaha':1.2625, 'Kalutara':1.2904, 'Matale':"NQC", 'Kandy':1.2479, 'Nuwara Eliya':"NQC", 'Galle':1.2685, 'Matara':1.2719, 'Hambantota':"NQC", 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':1.2541, 'Vavuniya':1.2521, 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':"NQC", 'Kurunegala':1.3051, 'Anuradhapura':"NQC", 'Polonnaruwa':1.2950, 'Badulla':1.2377, 'Monaragala':1.2380, 'Kegalle':1.2780, 'Ratnapura':1.2372}, 
requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics"," German"," Combined Mathematics or Mathematics"," History"," Political Science"," English ","Logic & Scientific Method"," French","Information & Communication Technology"] 
},
  
 
       

//-----------------------  page4
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
    university: "University of Ruhuna ", 
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

        
        
//----------------------- page5
{
    name: "HUMAN RESOURCE DEVELOPMENT", 
    university: "Uva Wellassa University of Sri Lanka", // Example, adjust as needed
    districtRequirements: {'Colombo': 1.4471,'Gampaha': 1.4873,'Kalutara': 1.5767,'Matale': 1.6141,'Kandy': 1.5499,'Nuwara Eliya': 1.6196,'Galle': 1.5356,'Matara': 1.5510,'Hambantota': 1.5173,'Jaffna': 1.4598,'Kilinochchi': 1.5526,'Mannar': 1.5920,'Mullaitivu': 1.6461,'Vavuniya': 1.3174,'Trincomalee': 1.6698,'Batticaloa': 1.5635,'Ampara': 1.6659,'Puttalam': 1.5841,'Kurunegala': 1.6156,'Anuradhapura': 1.4898,'Polonnaruwa': 1.5368,'Badulla': 1.5510,'Monaragala': 1.6109,'Kegalle': 1.5517,'Ratnapura': 1.6040
    },
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical", "Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam, Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"] // Adjust as needed // Example, adjust as needed
},


{ 
        name: "PRIMARY EDUCATION", 
        university: "University of Colombo", // Example, adjust as needed
        districtRequirements: {'Colombo':1.5008,'Gampaha':1.6821,'Kalutara':1.7488,'Matale':1.6264,'Kandy':1.4135,'Nuwara Eliya':1.6318,'Galle':1.8038,'Matara':1.7911,'Hambantota':1.7798,'Jaffna':"NQC",'Kilinochchi':"NQC",'Mannar':"NQC",'Mullaitivu':"NQC",'Vavuniya':1.6569,'Trincomalee':1.4990,'Batticaloa':"NQC",'Ampara':1.4953,'Puttalam':1.7294,'Kurunegala':1.8039,'Anuradhapura':1.6590,'Polonnaruwa':1.7729,'Badulla':1.7796,'Monaragala':1.6893,'Kegalle':1.5968,'Ratnapura':1.7623
        }, 
        requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical", "Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam, Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"] // Adjust as needed

},
//-----------------------  
{ 
        name: "MANAGEMENT STUDIES (TV) - A", 
        university: "University of Vavuniya, Sri Lanka", // Example, adjust as needed
        districtRequirements: {'Colombo':1.2271,'Gampaha':1.2283,'Kalutara':1.2333,'Matale':1.1586,'Kandy':1.2041,'Nuwara Eliya':1.1127,'Galle':1.2229,'Matara':1.2174,'Hambantota':"NQC",'Jaffna':"NQC",'Kilinochchi':"NQC",'Mannar':"NQC",'Mullaitivu':"NQC",'Vavuniya':1.2117,'Trincomalee':"NQC",'Batticaloa':1.0977,'Ampara':"NQC",'Puttalam':1.0899,'Kurunegala':1.2393,'Anuradhapura':1.1501,'Polonnaruwa':1.1436,'Badulla':1.1152,'Monaragala':1.2249,'Kegalle':1.2441,'Ratnapura':1.1750
        }, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics","German","Combined Mathematics or Mathematics","History","Political Science","English","Logic & Scientific Method","French","Information & Communication Technology"]
},

{       name: "MANAGEMENT STUDIES (TV) - A", 
        university: "Eastern University -Trincomalee Campus", // Example, adjust as needed
        districtRequirements: {'Colombo':1.2326,'Gampaha':1.2338,'Kalutara':1.2380,'Matale':"NQC",'Kandy':1.2320,'Nuwara Eliya':1.1128,'Galle':1.2377,'Matara':1.2173,'Hambantota':1.0374,'Jaffna':0.9572,'Kilinochchi':0.9587,'Mannar':1.0619,'Mullaitivu':"NQC",'Vavuniya':1.0532,'Trincomalee':0.9470,'Batticaloa':1.0897,'Ampara':0.9916,'Puttalam':"NQC",'Kurunegala':1.2554,'Anuradhapura':1.1762,'Polonnaruwa':1.0740,'Badulla':1.1193,'Monaragala':1.2028,'Kegalle':1.2477,'Ratnapura':1.1759
        }, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics","German","Combined Mathematics or Mathematics","History","Political Science","English","Logic & Scientific Method","French","Information & Communication Technology"]
},

{
        name: "MANAGEMENT STUDIES (TV) - B", 
        university: "University of Vavuniya, Sri Lanka", // Example, adjust as needed
        districtRequirements: {'Colombo':1.3148,'Gampaha':1.3355,'Kalutara':1.3144,'Matale':1.3364,'Kandy':"NQC",'Nuwara Eliya':1.3413,'Galle':1.4449,'Matara':1.3128,'Hambantota':1.3197,'Jaffna':"NQC",'Kilinochchi':1.4266,'Mannar':"NQC",'Mullaitivu':"NQC",'Vavuniya':1.3383,'Trincomalee':1.3403,'Batticaloa':"NQC",'Ampara':1.3140,'Puttalam':1.3180,'Kurunegala':1.3235,'Anuradhapura':1.3182,'Polonnaruwa':1.3523,'Badulla':1.3805,'Monaragala':1.3171,'Kegalle':1.3678,'Ratnapura':1.3158
        }, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics","German","Combined Mathematics or Mathematics","History","Political Science","English","Logic & Scientific Method","French","Information & Communication Technology"] // Adjust as needed
},

    

{
        name: "MANAGEMENT STUDIES (TV) - B", 
        university: "Eastern University -Trincomalee Campus", // Example, adjust as needed
        districtRequirements: {'Colombo':1.2159,'Gampaha':1.2759,'Kalutara':1.2993,'Matale':1.3359,'Kandy':1.2688,'Nuwara Eliya':1.2609,'Galle':1.2892,'Matara':1.3061,'Hambantota':1.2982,'Jaffna':1.1540,'Kilinochchi':1.1442,'Mannar':1.1552,'Mullaitivu':1.1958,'Vavuniya':1.3344,'Trincomalee':1.2222,'Batticaloa':1.2751,'Ampara':1.3366,'Puttalam':1.3010,'Kurunegala':1.3053,'Anuradhapura':1.2678,'Polonnaruwa':1.2933,'Badulla':1.3394,'Monaragala':1.2760,'Kegalle':1.2878,'Ratnapura':1.2878
        }, 
        requiredSubjects: ["Business Studies","Economics","Accounting","Agricultural Science","Geography","Business Statistics","German","Combined Mathematics or Mathematics","History","Political Science","English","Logic & Scientific Method","French","Information & Communication Technology"] // Adjust as needed
},

{ 
        name: "COMMUNICATION STUDIES *", 
        university: "Eastern University -Trincomalee Campus)", // Example, adjust as needed
        districtRequirements: { 'Colombo':1.2591,'Gampaha':1.2591,'Kalutara':1.2591,'Matale':1.2591,'Kandy':1.2591,'Nuwara Eliya':1.2591,'Galle':1.2591,'Matara':1.2591,'Hambantota':1.2591,'Jaffna':1.2591,'Kilinochchi':1.2591,'Mannar':1.2591,'Mullaitivu':1.2591,'Vavuniya':1.2591,'Trincomalee':1.2591,'Batticaloa':1.2591,'Ampara':1.2591,'Puttalam':1.2591,'Kurunegala':1.2591,'Anuradhapura':1.2591,'Polonnaruwa':1.2591,'Badulla':1.2591,'Monaragala':1.2591,'Kegalle':1.2591,'Ratnapura':1.2591}, 
        requiredSubjects: ["Sinhala","Tamil","English","History","Geography","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islam Civilization","Political Science","Logic and Scientific Method","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Art","Oriental Music","Carnatic Music","Western Music","Pali","Sanskrit","Arabic","Chinese","French","German","Hindi","Japanese","Greek and Roman Civilization"] // Adjust as needed
},

{
    name: "FINANCIAL ECONOMICS", 
    university: "University of Sri Jayewardenepura", // Example, adjust as needed
    districtRequirements: {'Colombo':1.8051,'Gampaha':1.8160,'Kalutara':1.7039,'Matale':1.7129,'Kandy':1.7072,'Nuwara Eliya':1.7221,'Galle':1.8236,'Matara':1.8438,'Hambantota':1.6811,'Jaffna':1.3548,'Kilinochchi':1.3238,'Mannar':1.0650,'Mullaitivu':1.5658,'Vavuniya':1.6188,'Trincomalee':1.6772,'Batticaloa':1.7445,'Ampara':1.4429,'Puttalam':1.7536,'Kurunegala':1.7298,'Anuradhapura':1.7909,'Polonnaruwa':1.8244,'Badulla':1.8211,'Monaragala':1.6468,'Kegalle':1.7454,'Ratnapura':1.7394
    }, 
    requiredSubjects: ["Economics","Accounting","Business Studies","Business Statistics","Sinhala","Tamil","English","History","Geography","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islam Civilization","Political Science","Logic and Scientific Method","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Art","Oriental Music","Carnatic Music","Western Music","Pali","Sanskrit","Arabic","Chinese","French","German","Hindi","Japanese","Greek and Roman Civilization"] // Adjust as needed
},

{
    name: "CREATIVE MUSIC TECHNOLOGY & PRODUCTION", 
    university: "University of Sri Jayewardenepura", // Example, adjust as needed
    districtRequirements: {'Colombo':1.4571,'Gampaha':1.3741,'Kalutara':1.5565, 'Matale':1.3067,'Kandy':1.4413,'Nuwara Eliya':1.6155,'Galle':1.4901,'Matara':1.5734,'Hambantota':1.5549,'Jaffna':1.1702,'Kilinochchi':1.3765,'Mannar':1.1896,'Mullaitivu':1.1836,'Vavuniya':1.2851,'Trincomalee':1.2349,'Batticaloa':1.3342,'Ampara':1.3103,'Puttalam':1.2811,'Kurunegala':1.3590,'Anuradhapura':1.5666,'Polonnaruwa':1.3766,'Badulla':1.3535,'Monaragala':1.3682,'Kegalle':1.5945,'Ratnapura':1.5729
    }, 
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical", "Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam, Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"]
},

{
    name: "PEACE & CONFLICT RESOLUTION *", 
    university: "University of Kelaniya", // Example, adjust as needed
    districtRequirements: { 'Colombo':1.7097,'Gampaha':1.7097,'Kalutara':1.7097,'Matale':1.7097,'Kandy':1.7097,'Kalutara':1.7097,'Matale':1.7097,'Kandy':1.7097,'Nuwara Eliya':1.7097,'Galle':1.7097,'Matara':1.7097,'Hambantota':1.7097,'Jaffna':1.7097,'Kilinochchi':1.7097,'Mannar':1.7097,'Mullaitivu':1.7097,'Vavuniya':1.7097,'Trincomalee':1.7097,'Batticaloa':1.7097,'Ampara':1.7097,'Puttalam':1.7097,'Kurunegala':1.7097,'Anuradhapura':1.7097,'Polonnaruwa':1.7097,'Badulla':1.7097,'Monaragala':1.7097,'Kegalle':1.7097,'Ratnapura':1.7097}, 
    requiredSubjects: ["Sinhala","Tamil","English","History","Geography","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islam Civilization","Political Science","Logic and Scientific Method","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Art","Oriental Music","Carnatic Music","Western Music","Pali","Sanskrit","Arabic","Chinese","French","German","Hindi","Japanese","Greek and Roman Civilization"] // Adjust as needed
},

{
    name: "ISLAMIC STUDIES *", 
    university: "South Eastern University of Sri Lanka", // Example, adjust as needed
    districtRequirements: {'Colombo':1.0912,'Gampaha':1.0912,'Kalutara':1.0912,'Matale':1.0912,'Kandy':1.0912,'Nuwara Eliya':1.0912,'Galle':1.0912,'Matara':1.0912,'Hambantota':1.0912,'Jaffna':1.0912,'Kilinochchi':1.0912,'Mannar':1.0912,'Mullaitivu':1.0912,'Vavuniya':1.0912,'Trincomalee':1.0912,'Batticaloa':1.0912,'Ampara':1.0912,'Puttalam':1.0912,'Kurunegala':1.0912,'Anuradhapura':1.0912,'Polonnaruwa':1.0912,'Badulla':1.0912,'Monaragala':1.0912,'Kegalle':1.0912,'Ratnapura':1.0912}, 
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical", "Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam, Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"] // Adjust as needed
},

{
    name: "ARABIC LANGUAGE *", 
    university: "South Eastern University of Sri Lanka", // Example, adjust as needed
    districtRequirements: {'Colombo':0.6697,'Gampaha':0.6697,'Kalutara':0.6697,'Matale':0.6697,'Kandy':0.6697,'Nuwara Eliya':0.6697,'Galle':0.6697,'Matara':0.6697,'Hambantota':0.6697,'Jaffna':0.6697,'Kilinochchi':0.6697,'Mannar':0.6697,'Mullaitivu':0.6697,'Vavuniya':0.6697,'Trincomalee':0.6697,'Batticaloa':0.6697,'Ampara':0.6697,'Puttalam':0.6697,'Kurunegala':0.6697,'Anuradhapura':0.6697,'Polonnaruwa':0.6697,'Badulla':0.6697,'Monaragala':0.6697,'Kegalle':0.6697,'Ratnapura':0.6697}, 
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical", "Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam, Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"] // Adjust as needed
},

{
    name: "ARCHITECTURE #", 
    university: "University of Moratuwa", // Example, adjust as needed
    districtRequirements: {'Colombo':1.1027,'Gampaha':0.3956,'Kalutara':0.8229,'Matale':1.0112,'Kandy':1.0442,'Nuwara Eliya':1.1282,'Galle':1.2613,'Matara':1.1287,'Hambantota':0.9159,'Jaffna':1.2043,'Kilinochchi':"NQC",'Mannar':1.0359,'Mullaitivu':"NQC",'Vavuniya':"NQC",'Trincomalee':0.6160,'Batticaloa':1.0429,'Ampara':0.9578,'Puttalam':0.4771,'Kurunegala':1.1679,'Anuradhapura':0.3166,'Polonnaruwa':0.4470,'Badulla':0.9134,'Monaragala':0.5759,'Kegalle':1.0945,'Ratnapura':0.8104}, 
    requiredSubjects: ["Art","Geography","iology","Higher Mathematics","Chemistry","Physics","Combined Mathematics"] // Adjust as needed
},

{ 
    name: "DESIGN #", 
    university: "University of Moratuwa", // Example, adjust as needed
    districtRequirements: {'Colombo':1.1710,'Gampaha':0.4672,'Kalutara':0.8747,'Matale':0.7659,'Kandy':0.7393,'Nuwara Eliya':0.5186,'Galle':0.6972,'Matara':1.0700,'Hambantota':0.6614,'Jaffna':"NQC",'Kilinochchi':"NQC",'Mannar':"NQC",'Mullaitivu':"NQC",'Vavuniya':"NQC",'Trincomalee':"NQC",'Batticaloa':"NQC",'Ampara':0.1072,'Puttalam':1.9784,'Kurunegala':0.8923,'Anuradhapura':0.2262,'Polonnaruwa':"NQC",'Badulla':0.6454,'Monaragala':0.1659,'Kegalle':0.4628,'Ratnapura':0.5249}, 
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical", "Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam, Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"] // Adjust as needed
},

{ 
    name: "LANDSCAPE ARCHITECTURE", 
    university: "University of Moratuwa", 
    districtRequirements: {'Colombo': 0.2314,'Gampaha': 0.1232,'Kalutara': 0.5218,'Matale': 0.5681,'Kandy': 0.5865,'Nuwara Eliya': "NQC",'Galle': 0.0535,'Matara': 0.6811,'Hambantota': 0.2734,'Jaffna': -0.0937,'Kilinochchi': "NQC",'Mannar': "NQC",'Mullaitivu': "NQC",'Vavuniya': "NQC",'Trincomalee': "NQC",'Batticaloa': 0.8021,'Ampara': 0.2531,'Puttalam': "NQC",'Kurunegala': 0.6169,'Anuradhapura': -0.0345,'Polonnaruwa': 0.0778,'Badulla': 0.2706,'Monaragala': 0.5746,'Kegalle': 0.6021,'Ratnapura': 0.2226}, 
    requiredSubjects: ["Art","Geography","iology","Higher Mathematics","Chemistry","Physics","Combined Mathematics","Agricultural Science","Accounting","Hindi","Arabic","Hindu Civilization","Buddhist Civilization","History","Business Statistics","Home Economics","Business Studies","Islamic Civilization","Chinese","Japanese","Greek & Roman Civilization","Logic & Scientific Method","Economics","Political Science","Mathematics","Pali","English","Sanskrit","French","Sinhala","German","Communication & Media Studies","Tamil","Information & Communication","Christian Civilization Technology"] // Adjust as needed

},

{
    name: "TOWN & COUNTRY PLANNING", 
    university: "University of Moratuwa", // Adjust as needed
    districtRequirements: {'Colombo': 1.0697,'Gampaha': 0.9684,'Kalutara': 1.0595,'Matale': 1.0800,'Kandy': 0.9261,'Nuwara Eliya': 0.8728,'Galle': 1.0997,'Matara': 1.0875,'Hambantota': 1.0208,'Jaffna': 1.1080,'Kilinochchi': 1.0034,'Mannar': 0.8482,'Mullaitivu': 0.9077,'Vavuniya': 1.0356,'Trincomalee': 1.1375,'Batticaloa': 0.9939,'Ampara': 1.0158,'Puttalam': 0.8864,'Kurunegala': 1.0637,'Anuradhapura': 0.9754,'Polonnaruwa': 0.7398,'Badulla': 1.0761,'Monaragala': 1.1026,'Kegalle': 1.1404,'Ratnapura': 1.0998}, 
    requiredSubjects: ["Combined Mathematics","Chemistry","Physics","Biology","Geography","Agricultural Science","Higher Mathematics","Business Studies","Logic & Scientific Methods","Business Statistics","Mathematics","Information & Communication","Biosystems Technology","Science for Technology","Economics","Engineering Technology","Political Science"] // Adjust as needed
},


{
    name: "FASHION DESIGN & PRODUCT DEVELOPMENT #", 
    university: "University of Moratuwa", // Example, adjust as needed
    districtRequirements: {'Colombo': 1.1710,'Gampaha': 0.8354,'Kalutara': 1.2241,'Matale': 0.8278,'Kandy': 0.7925,'Nuwara Eliya': -0.0576,'Galle': 0.9833,'Matara': 0.6762,'Hambantota': 0.6245,'Jaffna': 0.9751,'Kilinochchi': "NQC",'Mannar': "NQC",'Mullaitivu': "NQC",'Vavuniya': "NQC",'Trincomalee': 0.2069,'Batticaloa': "NQC",'Ampara': 0.7401,'Puttalam': 0.7015,'Kurunegala': 1.0022,'Anuradhapura': 0.3905,'Polonnaruwa': 1.1116,'Badulla': 0.5494,'Monaragala': 0.6034,'Kegalle': 0.9389,'Ratnapura': 0.5435}, 
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical", "Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam, Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"] // Adjust as needed
},

{
    name: "ARTIFICIAL INTELLIGENCE", 
    university: "University of Moratuwa", // Example, adjust as needed
    districtRequirements: {'Colombo': 2.0481,'Gampaha': 2.0455,'Kalutara': 2.0560,'Matale': 2.0039,'Kandy': 1.8855,'Nuwara Eliya': 2.0535,'Galle': 2.1122,'Matara': 2.0723,'Hambantota': 1.9027,'Jaffna': 1.9617,'Kilinochchi': 1.3238,'Mannar': 1.5693,'Mullaitivu': 1.2498,'Vavuniya': 1.7488,'Trincomalee': 1.3678,'Batticaloa': 2.0229,'Ampara': 1.6088,'Puttalam': 1.4693,'Kurunegala': 1.9247,'Anuradhapura': 1.6915,'Polonnaruwa': 1.5049,'Badulla': 1.9214,'Monaragala': 1.9966,'Kegalle': 2.0723,'Ratnapura': 1.9903}, 
    requiredSubjects: ["Combined Mathematics","Physics", "Higher Mathematics","Combined Mathematics","Higher Mathematics","Mathematics","Physics","Chemistry","Information & Communication Technology"] // Adjust as needed
},

{ 
    name: "INFORMATION TECHNOLOGY (IT)", 
    university: "University of Moratuwa", 
    districtRequirements: {'Colombo': 1.3164,'Gampaha': 1.1536,'Kalutara': 1.2986,'Matale': 1.2489,'Kandy': 1.1493,'Nuwara Eliya': 0.6335,'Galle': 1.0783,'Matara': 1.2718,'Hambantota': 1.0203,'Jaffna': 1.2979,'Kilinochchi': "NQC",'Mannar': 0.4729,'Mullaitivu': "NQC",'Vavuniya': 0.7056,'Trincomalee': 1.3122,'Batticaloa': 1.2506,'Ampara': 0.9146,'Puttalam': 0.6786,'Kurunegala': 1.1116,'Anuradhapura': 1.0165,'Polonnaruwa': 0.7652,'Badulla': 0.7908,'Monaragala': 0.8100,'Kegalle': 0.8749,'Ratnapura': 1.0426}, 
    requiredSubjects: ["Higher Mathematics", "Combined Mathematics", "Mathematics","Physics"] // Adjust as needed
},

{
    name: "INFORMATION TECHNOLOGY & MANAGEMENT", 
    university: "University of Moratuwa", 
    districtRequirements: {'Colombo': 1.6983,'Gampaha': 1.5670,'Kalutara': 1.6458,'Matale': 1.3254,'Kandy': 1.6390,'Nuwara Eliya': 1.3012,'Galle': 1.7065,'Matara': 1.7336,'Hambantota': 1.6923,'Jaffna': 1.7388,'Kilinochchi': 1.3178,'Mannar': 1.4707,'Mullaitivu': 1.4911,'Vavuniya': 1.5225,'Trincomalee': 1.5588,'Batticaloa': 1.5310,'Ampara': 1.4474,'Puttalam': 1.3475,'Kurunegala': 1.6197,'Anuradhapura': 1.4700,'Polonnaruwa': 1.3141,'Badulla': 1.4983,'Monaragala': 1.4741,'Kegalle': 1.5964,'Ratnapura': 1.5941}, 
    requiredSubjects: ["Higher Mathematics","Mathematics","Combined Mathematics","Physics","Accounting","Business Statistics","Economics","Information & Communication","Geography Technology","Logic & Scientific Method","Chemistry"] // Adjust as needed
},

{   
    name: "FACILITIES MANAGEMENT", 
    university: "University of Moratuwa", 
    districtRequirements: {'Colombo': 1.5402,'Gampaha': 1.4289,'Kalutara': 1.5413,'Matale': 1.4563,'Kandy': 1.4694,'Nuwara Eliya': 1.4563,'Galle': 1.4443,'Matara': 1.5603,'Hambantota': 1.4689,'Jaffna': 1.3551,'Kilinochchi': 1.1817,'Mannar': 1.4705,'Mullaitivu': 1.1849,'Vavuniya': 1.5549,'Trincomalee': 1.5491,'Batticaloa': 1.4509,'Ampara': 1.2264,'Puttalam': 1.4384,'Kurunegala': 1.3966,'Anuradhapura': 1.5064,'Polonnaruwa': 1.4111,'Badulla': 1.5751,'Monaragala': 1.5587,'Kegalle': 1.4342,'Ratnapura': 1.5024}, 
    requiredSubjects: ["Chemistry","Combined Mathematics","Physics","Business Studies", "Economics","Accounting","Agricultural Science","Geography","German","Combined Mathematics","History,Political Science","English","Logic & Scientific Methods","French","Physics","Information & Communication Technology"] // Adjust as neede
},



{
    name: "TRANSPORT MANAGEMENT & LOGISTICS ENGINEERING (TMLE)", 
    university: "University of Moratuwa", 
    districtRequirements: {'Colombo': 1.5629,'Gampaha': 1.4590,'Kalutara': 1.5900,'Matale': 1.5183,'Kandy': 1.5028,'Nuwara Eliya': 1.2798,'Galle': 1.6060,'Matara': 1.5496,'Hambantota': 1.6021,'Jaffna': 1.5589,'Kilinochchi': 1.0237,'Mannar': 1.0463,'Mullaitivu': 0.7543,'Vavuniya': 1.1570,'Trincomalee': 1.2354,'Batticaloa': 1.3384,'Ampara': 1.1981,'Puttalam': 1.3067,'Kurunegala': 1.5275,'Anuradhapura': 1.3866,'Polonnaruwa': 1.1273,'Badulla': 1.4448,'Monaragala': 1.4683,'Kegalle': 1.5047,'Ratnapura': 1.5039}, 
    requiredSubjects: ["Chemistry", "Combined Mathematics","Physics"] // Adjust as needed

},

{
    name: "BUSINESS SCIENCE", 
    university: "University of Moratuwa", 
    districtRequirements: {'Colombo': 1.9698,'Gampaha': 1.8747,'Kalutara': 1.9138,'Matale': 1.9048,'Kandy': 1.7062,'Nuwara Eliya': 1.6831,'Galle': 1.9024,'Matara': 2.0100,'Hambantota': 1.6099,'Jaffna': 1.3797,'Kilinochchi': 0.9290,'Mannar': 1.7639,'Mullaitivu': 1.4431,'Vavuniya': 2.0405,'Trincomalee': 1.6668,'Batticaloa': 1.5441,'Ampara': 1.6587,'Puttalam': 1.8480,'Kurunegala': 1.6678,'Anuradhapura': 1.8292,'Polonnaruwa': 1.8008,'Badulla': 1.6827,'Monaragala': 1.8142,'Kegalle': 1.8571,'Ratnapura': 1.9577}, 
    requiredSubjects: ["Chemistry","Accounting","Business Studie","Business Statistics","Economics","Combined Mathematics","Information & Communication Technology" ,"Physics"] // Adjust as needed
},

{
    name: "MANAGEMENT AND INFORMATION TECHNOLOGY (MIT)", 
    university: "University of Kelaniya", 
    districtRequirements: {'Colombo': 1.2478,'Gampaha': 1.2728,'Kalutara': 1.2294,'Matale': 1.3236,'Kandy': 1.2685,'Nuwara Eliya': 0.7213,'Galle': 1.2934,'Matara': 1.3459,'Hambantota': 1.3027,'Jaffna': 1.3509,'Kilinochchi': "NQC",'Mannar': 1.0933,'Mullaitivu': 0.7165,'Vavuniya': 0.7135,'Trincomalee': 1.0237,'Batticaloa': 1.3141,'Ampara': 0.8861,'Puttalam': 1.0236,'Kurunegala': 1.2605,'Anuradhapura': 1.2434,'Polonnaruwa': 0.6901,'Badulla': 1.1443,'Monaragala': 1.2309,'Kegalle': 1.2025,'Ratnapura': 1.2087}, 
    requiredSubjects: ["Higher Mathematics","Combined Mathematics","Mathematics", "Physics,Information & Communication Technology","Chemistry"] // Adjust as needed
},

{
    name: "INDUSTRIAL STATISTICS & MATHEMATICAL FINANCE", 
    university: "University of Colombo", 
    districtRequirements: {'Colombo': 1.2869,'Gampaha': 1.2593,'Kalutara': 1.2416,'Matale': 1.0975,'Kandy': 1.2782,'Nuwara Eliya': 0.8723,'Galle': 1.3176,'Matara': 1.2872,'Hambantota': 1.3374,'Jaffna': 1.2150,'Kilinochchi': 0.8720,'Mannar': 0.5469,'Mullaitivu': 0.5726,'Vavuniya': 1.2292,'Trincomalee': 1.0293,'Batticaloa': 1.1579,'Ampara': 1.0165,'Puttalam': 1.0541,'Kurunegala': 1.2803,'Anuradhapura': 1.1118,'Polonnaruwa': 0.7717,'Badulla': 1.2877,'Monaragala': 1.1301,'Kegalle': 1.3233,'Ratnapura': 1.2318}, 
    requiredSubjects: ["Combined Mathematics", "Higher Mathematic", "Physics", "Chemistry"
] 

},

{
    name: "FINANCIAL MATHEMATICS AND INDUSTRIAL STATISTICS", 
    university: "University of Ruhuna", 
    districtRequirements: {'Colombo': 1.0288,'Gampaha': 1.0215,'Kalutara': 1.0783,'Matale': 0.8920,'Kandy': 0.9673,'Nuwara Eliya': 0.6082,'Galle': 1.0711,'Matara': 1.0809,'Hambantota': 1.1104,'Jaffna': 1.0583,'Kilinochchi': 0.4734,'Mannar': 0.3522,'Mullaitivu': 0.5371,'Vavuniya': 0.8896,'Trincomalee': 0.9288,'Batticaloa': 1.0484,'Ampara': 0.8596,'Puttalam': 0.9377,'Kurunegala': 1.0196,'Anuradhapura': 0.9891,'Polonnaruwa': 0.7040,'Badulla': 1.0562,'Monaragala': 0.8842,'Kegalle': 1.0717,'Ratnapura': 1.0688}, 
    requiredSubjects: ["Combined Mathematics", "Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies","Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical", "Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home EconomicsHome Economics", "Higher Mathematics", "Islam", "Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for TechnologyScience for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"] // Adjust as needed

},

{
    name: "STATISTICS & OPERATIONS RESEARCH", 
    university: "University of Peradeniya", 
    districtRequirements: {'Colombo': 1.2705,'Gampaha': 1.2686,'Kalutara': 1.3111,'Matale': 1.2780,'Kandy': 1.3497,'Nuwara Eliya': 1.0681,'Galle': 1.3609,'Matara': 1.3502,'Hambantota': 1.3608,'Jaffna': 1.3553,'Kilinochchi': 0.8949,'Mannar': 0.7306,'Mullaitivu': 0.5698,'Vavuniya': 1.0531,'Trincomalee': 1.1016,'Batticaloa': 1.2576,'Ampara': 1.0712,'Puttalam': 1.0640,'Kurunegala': 1.3563,'Anuradhapura': 1.2189,'Polonnaruwa': 0.9675,'Badulla': 1.3069,'Monaragala': 1.2613,'Kegalle': 1.3095,'Ratnapura': 1.3252}, 
    requiredSubjects: ["Combined Mathematics", "Biology", "Chemistry", "Physics", "Agricultural Science", "Mathematics", "Higher Mathematics", "Information & Communication Technology"]


},

//----------------------- page6
     
{ 
    name: "GEOGRAPHICAL INFORMATION SCIENCECAL SCIENCE", 
    university: "SoutUniversity of Peradeniy", 
    districtRequirements: { 'Colombo':1.9222, 'Gampaha':1.9961, 'Kalutara':1.9233, 'Matale':1.9493, 'Kandy':2.0302, 'Nuwara Eliya':1.7989, 'Galle':1.9887, 'Matara':2.0730, 'Hambantota':1.9968, 'Jaffna':1.8949, 'Kilinochchi':2.0612, 'Mannar':1.9200, 'Mullaitivu':1.9218, 'Vavuniya':1.766, 'Trincomalee':2.0327, 'Batticaloa':1.9766, 'Ampara':1.9955, 'Puttalam':1.8688, 'Kurunegala':2.0336, 'Anuradhapura':1.9597, 'Polonnaruwa':2.0047, 'Badulla':1.9882, 'Monaragala':1.9926, 'Kegalle':1.9588, 'Ratnapura':2.0209}, 
    requiredSubjects: ["Biology", "Chemistry", "Physics", "Combined Mathematics", "Mathematics", "Higher Mathematics", "Agricultural Science", "Economics", "Geography", "History", "Home Economics", "Communication & Media Studies", "Information & Communication Technology", "Accounting"," Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology", "Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization", "Art", "Dancing", "Music", "Drama & Theatre", "Sinhala", "Baratha", "Oriental Music", "Carnatic Music", "Western Music", "Tamil Drama", "English Drama", "Classical Languages", "Foreign Languages", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean", "Chemistry; Physics; and Biology", "Chemistry; Physics or Mathematics; Biology or Agricultural Science", "Chemistry; Biology; Agricultural Science or Mathematics"]
},
{ 
    name: "INFORMATION AND COMMUNICATION TECHNOLOGY ", 
    university: "Rajarata University of Sri Lanka", 
    districtRequirements: { 'Colombo':0.8767, 'Gampaha':0.9018, 'Kalutara':0.8690, 'Matale':0.8958, 'Kandy': 0.8574, 'Nuwara Eliya':1.1640, 'Galle':0.8983, 'Matara':0.8574, 'Hambantota':0.8662, 'Jaffna':0.9188, 'Kilinochchi':"NVQ", 'Mannar':"NVQ", 'Mullaitivu':"NVQ", 'Vavuniya':1.4667, 'Trincomalee':1.0812, 'Batticaloa':0.8626, 'Ampara':0.8770, 'Puttalam':0.8809, 'Kurunegala':0.8900, 'Anuradhapura':0.8672, 'Polonnaruwa':"NVQ", 'Badulla':0.9185, 'Monaragala':"NQC", 'Kegalle':0.9015, 'Ratnapura':0.9586}, 
    requiredSubjects: ["Higher Mathematics", "Mathematics "," Combined Mathematics", "Physics", "Chemistry", "Accounting", "Business Statistics", "Economics", "Business Studies", "Biology", "Geography", "Logic & Scientific Method", "Sanskrit", "Music Oriental,Carnatic,Western", "Civil Technology", "Mechanical Technology", "Electrical, Electronic and Information Technology", "Information & Communication Technology"]
},



{ 
    name: "INFORMATION AND COMMUNICATION TECHNOLOGY", 
    university: "University of Vavuniya, Sri Lanka", 
    districtRequirements: { 'Colombo': 0.5421, 'Gampaha': 0.5642, 'Kalutara': 0.7297, 'Matale': 0.6595, 'Kandy': 0.7592, 'Nuwara Eliya': 0.1790, 'Galle': 0.6911, 'Matara': 0.7513, 'Hambantota': 0.8136, 'Jaffna': 0.9618, 'Kilinochchi': 0.5043, 'Mannar': 0.8460, 'Mullaitivu': 1.1284, 'Vavuniya': 0.7217, 'Trincomalee': 0.5191, 'Batticaloa': 0.7440, 'Ampara': 0.7846, 'Puttalam': 0.0527, 'Kurunegala': 0.6661, 'Anuradhapura': 0.5470, 'Polonnaruwa': 0.3448, 'Badulla': 0.4432, 'Monaragala': 0.2875, 'Kegalle': 0.7922, 'Ratnapura': 0.4803 },
    requiredSubjects: ["Higher Mathematics", "Mathematics","Combined Mathematics", "Physics", "Chemistry", "Accounting", "Business Statistics", "Economics", "Business Studies", "Biology", "Geography", "Logic & Scientific Method", "Sanskrit", "Music Oriental,Carnatic,Western", "Civil Technology", "Mechanical Technology", "Electrical, Electronic and Information Technology", "Information & Communication Technology"]
},
{ 
    name: "INFORMATION SYSTEMS #", 
    university: "University of Colombo School of Computing", 
    districtRequirements: { 'Colombo': 1.1812, 'Gampaha': 1.2055, 'Kalutara': 1.2078, 'Matale': "NQC", 'Kandy': 1.2129, 'Nuwara Eliya': 1.2299, 'Galle': 1.1780, 'Matara': 1.2019, 'Hambantota': 1.3559, 'Jaffna': 1.2029, 'Kilinochchi': "NQC", 'Mannar': 1.2409, 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': "NQC", 'Batticaloa': 1.2695, 'Ampara': 1.3610, 'Puttalam': "NQC", 'Kurunegala': 1.3119, 'Anuradhapura': 1.2306, 'Polonnaruwa': "NQC", 'Badulla': 2.1134, 'Monaragala': "NQC", 'Kegalle': 1.1952, 'Ratnapura': 1.2978 },
    requiredSubjects: ["Higher Mathematics", "Combined Mathematics", "Mathematics", "Physics"]
},

{ 
    name: "INFORMATION SYSTEMS #", 
    university: "University of Sri Jayewardenepura", 
    districtRequirements: { 'Colombo': 1.1415, 'Gampaha': 1.1482, 'Kalutara': 1.2117, 'Matale': 1.5958, 'Kandy': 1.3269, 'Nuwara Eliya': "NQC", 'Galle': 1.1591, 'Matara': "NQC", 'Hambantota': 1.2605, 'Jaffna': "NQC", 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': "NQC", 'Batticaloa': "NQC", 'Ampara': "NQC", 'Puttalam': 1.1742, 'Kurunegala': 1.1651, 'Anuradhapura': "NQC", 'Polonnaruwa': "NQC", 'Badulla': "NQC", 'Monaragala': 1.4896, 'Kegalle': 1.1581 },
    requiredSubjects: ["Higher Mathematics", "Combined Mathematics", "Mathematics", "Physics"]
},

{ 
    name: "INFORMATION SYSTEMS #", 
    university: "University of Sabaragamuwa", 
    districtRequirements: { 'Colombo': 0.9414, 'Gampaha': 0.4499, 'Kalutara': 0.3636, 'Matale': 0.2153, 'Kandy': 0.2190, 'Nuwara Eliya': 0.2643, 'Galle': 0.7929, 'Matara': 0.4869, 'Hambantota': 0.2568, 'Jaffna': 0.2557, 'Kilinochchi': "NQC", 'Mannar': 0.2580, 'Mullaitivu': "NQC", 'Vavuniya': 0.3714, 'Trincomalee': 0.3894, 'Batticaloa': 0.3894, 'Ampara': 0.4487, 'Puttalam': 0.7094, 'Kurunegala': 0.2528, 'Anuradhapura': 0.4688, 'Polonnaruwa': 0.4235, 'Badulla': 0.2804, 'Monaragala': 0.4453, 'Kegalle': 0.5680, 'Ratnapura': 0.3236 },
    requiredSubjects: ["Higher Mathematics", "Combined Mathematics", "Mathematics", "Physics"]
},
{ 
    name: "SOFTWARE ENGINEERING", 
    university: "University of Sri Jayewardenepura", 
    districtRequirements: { 'Colombo': 1.4818, 'Gampaha': 1.4876, 'Kalutara': 1.4958, 'Matale': "NQC", 'Kandy': 1.4830, 'Nuwara Eliya': "NQC", 'Galle': 1.4822, 'Matara': 1.4852, 'Hambantota': 1.5052, 'Jaffna': 1.5082, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 1.4905, 'Trincomalee': "NQC", 'Batticaloa': "NQC", 'Ampara': 1.5052, 'Puttalam': "NQC", 'Kurunegala': 1.4925, 'Anuradhapura': 1.4966, 'Polonnaruwa': "NQC", 'Badulla': 1.4869, 'Monaragala': "NQC", 'Kegalle': 1.4864, 'Ratnapura': 1.4965 },
    requiredSubjects: ["Chemistry", "Higher Mathematics", "Information & Communication Technology"]
},
{ 
    name: "SOFTWARE ENGINEERING", 
    university: "University of Kelaniya", 
    districtRequirements: { 'Colombo': 1.5372, 'Gampaha': 1.5317, 'Kalutara': 1.5365, 'Matale': "NQC", 'Kandy': 1.5189, 'Nuwara Eliya': "NQC", 'Galle': 1.5465, 'Matara': 1.5372, 'Hambantota': 1.5143, 'Jaffna': 1.5199, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': 1.5418, 'Vavuniya': "NQC", 'Trincomalee': "NQC", 'Batticaloa': "NQC", 'Ampara': "NQC", 'Puttalam': "NQC", 'Kurunegala': 1.5466, 'Anuradhapura': "NQC", 'Polonnaruwa': "NQC", 'Badulla': "NQC", 'Monaragala': 1.5679, 'Kegalle': 1.5653, 'Ratnapura': 1.5318 },
    requiredSubjects: ["Chemistry", "Higher Mathematics", "Information & Communication Technology"]
},
{ 
    name: "SOFTWARE ENGINEERING", 
    university: "Sabaragamuwa University of Sri Lanka", 
    districtRequirements: { 'Colombo': 1.3875, 'Gampaha': 1.3388, 'Kalutara': "NQC", 'Matale': 1.1888, 'Kandy': 1.4210, 'Nuwara Eliya': 0.8187, 'Galle': 1.4546, 'Matara': "NQC", 'Hambantota': "NQC", 'Jaffna': 1.6124, 'Kilinochchi': 1.1679, 'Mannar': 1.1122, 'Mullaitivu': 1.0084, 'Vavuniya': "NQC", 'Trincomalee': 1.1570, 'Batticaloa': 1.3163, 'Ampara': 1.1844, 'Puttalam': 1.1462, 'Kurunegala': 1.3908, 'Anuradhapura': 1.2106, 'Polonnaruwa': 0.7810, 'Badulla': 1.3114, 'Monaragala': 1.2427, 'Kegalle': 1.4507, 'Ratnapura': 1.3435 },
    requiredSubjects: ["Chemistry", "Higher Mathematics", "Information & Communication Technology"]
},
{ 
    name: "AYURVEDIC MEDICINE & SURGERY", 
    university: "University of Colombo", 
    districtRequirements: { 'Colombo': 1.1413, 'Gampaha': 1.1320, 'Kalutara': 1.1161, 'Matale': 1.1834, 'Kandy': 1.1161, 'Nuwara Eliya': "NQC", 'Galle': 1.1543, 'Matara': 1.1339, 'Hambantota': 1.1243, 'Jaffna': 1.1722, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 1.1909, 'Trincomalee': 1.1224, 'Batticaloa': 1.1111, 'Ampara': 1.1254, 'Puttalam': 1.1243, 'Kurunegala': 1.1356, 'Anuradhapura': 1.1566, 'Polonnaruwa': 1.1235, 'Badulla': 1.1301, 'Monaragala': 1.1112, 'Kegalle': 1.1391, 'Ratnapura': 1.1219 },
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},
{ 
    name: "AYURVEDIC MEDICINE & SURGERY", 
    university: "The Gampaha Wickramarachchi University of Indigenous", 
    districtRequirements: { 'Colombo': 0.8453, 'Gampaha': 0.7884, 'Kalutara': 1.0163, 'Matale': 0.7967, 'Kandy': 0.8989, 'Nuwara Eliya': 0.7445, 'Galle': 1.0044, 'Matara': 1.1313, 'Hambantota': 1.1018, 'Jaffna': 0.8635, 'Kilinochchi': 0.6676, 'Mannar': 0.8186, 'Mullaitivu': 1.1659, 'Vavuniya': 1.0654, 'Trincomalee': 1.0945, 'Batticaloa': 1.0738, 'Ampara': 1.1254, 'Puttalam': 1.0073, 'Kurunegala': 0.9420, 'Anuradhapura': 0.9020, 'Polonnaruwa': 0.9141, 'Badulla': 1.0792, 'Monaragala': 1.0548, 'Kegalle': 0.9274, 'Ratnapura': 0.9978 },
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},
{ 
    name: "UNANI MEDICINE & SURGERY", 
    university: "University of Colombo", 
    districtRequirements: { 'Colombo': 0.9695, 'Gampaha': 0.5901, 'Kalutara': 0.7780, 'Matale': 1.0833, 'Kandy': 1.0023, 'Nuwara Eliya': 0.5256, 'Galle': 0.9355, 'Matara': 0.9573, 'Hambantota': 0.9321, 'Jaffna': 0.7642, 'Kilinochchi': 0.6318, 'Mannar': 0.8055, 'Mullaitivu': 0.4243, 'Vavuniya': 0.8336, 'Trincomalee': 1.1875, 'Batticaloa': 1.2597, 'Ampara': 1.3318, 'Puttalam': 1.3224, 'Kurunegala': 1.0916, 'Anuradhapura': 0.8270, 'Polonnaruwa': 1.0630, 'Badulla': 0.7582, 'Monaragala': 0.8588, 'Kegalle': 1.2434, 'Ratnapura': 0.9244 },
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},
{ 
    name: "SIDDHA MEDICINE & SURGERY", 
    university: "University of Jaffna", 
    districtRequirements: { 'Colombo': 0.5715, 'Gampaha': -0.4090, 'Kalutara': 0.7340, 'Matale': "NQC", 'Kandy': 0.5386, 'Nuwara Eliya': 0.2839, 'Galle': "NQC", 'Matara': "NQC", 'Hambantota': "NQC", 'Jaffna': 0.7470, 'Kilinochchi': 0.6740, 'Mannar': 0.6423, 'Mullaitivu': 0.6910, 'Vavuniya': 0.6363, 'Trincomalee': 0.7539, 'Batticaloa': 0.7482, 'Ampara': 0.7573, 'Puttalam': 0.5737, 'Kurunegala': 0.5313, 'Anuradhapura': 0.4092, 'Polonnaruwa': 0.3184, 'Badulla': 1.1353, 'Monaragala': 0.0480, 'Kegalle': 0.6065, 'Ratnapura': "NQC" },
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},
{ 
    name: "SIDDHA MEDICINE & SURGERY", 
    university: "Eastern University - Trincomalee Campus", 
    districtRequirements:{'Colombo': 0.4383, 'Gampaha': 0.4225, 'Kalutara': 0.5838, 'Matale': 0.5883, 'Kandy': 0.5284, 'Nuwara Eliya': "NQC", 'Galle': 0.5437, 'Matara': 0.5752, 'Hambantota': 0.6160, 'Jaffna': 0.8202, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 0.8055, 'Trincomalee': 0.8129, 'Batticaloa': 0.7989, 'Ampara': 0.7276, 'Puttalam': 0.5631, 'Kurunegala': 0.5652, 'Anuradhapura': 0.4273, 'Polonnaruwa': 0.5996, 'Badulla': 0.4693, 'Monaragala': 0.8132, 'Kegalle': 0.6019, 'Ratnapura': 0.4302},
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},
{ 
    name: "INDIGENOUS MEDICINAL RESOURCES", 
    university: "The Gampaha Wickramarachchi University of Indigenous  ", 
    districtRequirements: {'Colombo': 0.5043, 'Gampaha': 0.4798, 'Kalutara': 0.6228, 'Matale': 0.5791, 'Kandy': 0.5812, 'Nuwara Eliya': 0.3333, 'Galle': 0.6395, 'Matara': 0.6093, 'Hambantota': 0.6449, 'Jaffna': 0.6615, 'Kilinochchi': 0.3229, 'Mannar': 0.2385, 'Mullaitivu': 0.2822, 'Vavuniya': 0.4235, 'Trincomalee': 0.6419, 'Batticaloa': 0.6362, 'Ampara': 0.5632, 'Puttalam': 0.4660, 'Kurunegala': 0.6219, 'Anuradhapura': 0.4326, 'Polonnaruwa': 0.5682, 'Badulla': 0.5296, 'Monaragala': 0.5343, 'Kegalle': 0.6335, 'Ratnapura': 0.5360},
    requiredSubjects: ["Chemistry", "Physics", "Biology", "Agricultural Science"]
},
{ 
    name: "HEALTH INFORMATION AND COMMUNICATION TECHNOLOGY", 
    university: "The Gampaha Wickramarachchi University of Indigenous  ", 
    districtRequirements: {'Colombo': 0.9894, 'Gampaha': 1.0374, 'Kalutara': 1.0609, 'Matale': 1.1467, 'Kandy': 1.0658, 'Nuwara Eliya': 1.0474, 'Galle': 1.1468, 'Matara': 1.1646, 'Hambantota': 1.1374, 'Jaffna': 0.7980, 'Kilinochchi': 0.2938, 'Mannar': 0.3917, 'Mullaitivu': 0.4441, 'Vavuniya': 0.9452, 'Trincomalee': 0.7161, 'Batticaloa': 1.0664, 'Ampara': 0.8983, 'Puttalam': 0.7391, 'Kurunegala': 1.1512, 'Anuradhapura': 0.9924, 'Polonnaruwa': 0.6785, 'Badulla': 1.1306, 'Monaragala': 0.8673, 'Kegalle': 1.1158, 'Ratnapura': 1.0478},
    requiredSubjects: ["Business Studies", "Economics", "Accounting", "Agricultural Science", "Geography", "German", "Combined Mathematics ","Mathematics", "History", "Political Science", "English", "Logic & Scientific Method", "French", "Information & Communication Technology", "Chemistry"," Physics","Biology", "Mathematics"," Biology" ,"Agricultural Science","Mathematics", "Higher Mathematics", "Mathematics", "Combined Mathematics", "Physics", "Economics", "Geography", "Home Economics", "English", "Communication and Media Studies", "Information & Communication Technology", "Art", "Business Studies", "Accountancy", "Peace and Conflict Resolution", "Information and Communication Technology ", "Biosystems Technology", "Engineering Technology"]
},

{ 
    name: "BIOMEDICAL TECHNOLOGY", 
    university: "The Gampaha Wickramarachchi University of Indigenous ", 
    districtRequirements: {'Colombo': 1.0057, 'Gampaha': 1.0278, 'Kalutara': 1.1620, 'Matale': 1.1511, 'Kandy': 1.1061, 'Nuwara Eliya': 0.9012, 'Galle': 1.1831, 'Matara': 1.2344, 'Hambantota': 1.1551, 'Jaffna': 0.8457, 'Kilinochchi': 0.7141, 'Mannar': 0.7467, 'Mullaitivu': 0.8908, 'Vavuniya': 1.0332, 'Trincomalee': 1.1359, 'Batticaloa': 1.2084, 'Ampara': 0.9017, 'Puttalam': 0.7273, 'Kurunegala': 1.1566, 'Anuradhapura': 0.9687, 'Polonnaruwa': 1.1071, 'Badulla': 1.1073, 'Monaragala': 0.8528, 'Kegalle': 1.1261, 'Ratnapura': 1.0580},
    requiredSubjects: ["Engineering Technology ", "Science for Technology", "Economics", "Geography", "Home Economics", "English", "Communication and Media Studies", "Information & Communication Technology", "Art", "Business Studies", "Agricultural Science", "Accounting", "Mathematics", "Biosystems Technology "]
},
{ 
    name: "INDIGENOUS PHARMACEUTICAL TECHNOLOGY", 
    university: "The Gampaha Wickramarachchi University of Indigenous  ", 
    districtRequirements: {'Colombo': 0.9292, 'Gampaha': 0.9821, 'Kalutara': 1.0414, 'Matale': 1.1091, 'Kandy': 1.0226, 'Nuwara Eliya': 0.8341, 'Galle': 1.0864, 'Matara': 1.1012, 'Hambantota': 1.0918, 'Jaffna': 0.8371, 'Kilinochchi': 0.6293, 'Mannar': 0.8008, 'Mullaitivu': 0.4234, 'Vavuniya': 0.8293, 'Trincomalee': 0.6262, 'Batticaloa': 0.9611, 'Ampara': 0.9874, 'Puttalam': 0.6753, 'Kurunegala': 1.0954, 'Anuradhapura': 0.9214, 'Polonnaruwa': 1.0940, 'Badulla': 1.0919, 'Monaragala': 0.8524, 'Kegalle': 1.1031, 'Ratnapura': 1.0389},
    requiredSubjects: ["Engineering Technology ", "Science for Technology", "Economics", "Geography", "Home Economics", "English", "Communication and Media Studies", "Information & Communication Technology", "Art", "Business Studies", "Agricultural Science", "Accounting", "Mathematics", "Biosystems Technology "]
},
{ 
    name: "YOGA AND PARAPSYCHOLOGY", 
    university: "The Gampaha Wickramarachchi University of Indigenous  ", 
    districtRequirements: {'Colombo': 1.2371, 'Gampaha': 1.3088, 'Kalutara': 1.3075, 'Matale': 1.3078, 'Kandy': 1.3141, 'Nuwara Eliya': 1.3351, 'Galle': 1.3263, 'Matara': 1.3521, 'Hambantota': 1.3120, 'Jaffna': 1.1645, 'Kilinochchi': 1.1550, 'Mannar': 1.3570, 'Mullaitivu': 1.1545, 'Vavuniya': 1.3099, 'Trincomalee': 1.2732, 'Batticaloa': 1.1742, 'Ampara': 1.2965, 'Puttalam': 1.2870, 'Kurunegala': 1.3155, 'Anuradhapura': 1.2951, 'Polonnaruwa': 1.2805, 'Badulla': 1.3169, 'Monaragala': 1.3544, 'Kegalle': 1.3169, 'Ratnapura': 1.2958},
    requiredSubjects: ["Engineering Technology", "Science for Technology", "Economics", "Geography", "Home Economics", "English", "Communication and Media Studies", "Information & Communication Technology", "Art", "Business Studies", "Agricultural Science", "Accountancy", "Mathematics", "Biosystems Technology "]
},
{ 
    name: "SOCIAL STUDIES IN INDIGENOUS KNOWLEDGE ", 
    university: "The Gampaha Wickramarachchi University of Indigenous  ", 
    districtRequirements: {'Colombo': 1.2723, 'Gampaha': 1.2789, 'Kalutara': 1.3080, 'Matale': 1.3261, 'Kandy': 1.3616, 'Nuwara Eliya': 1.3617, 'Galle': 1.3240, 'Matara': 1.3184, 'Hambantota': 1.3160, 'Jaffna': 1.2371, 'Kilinochchi': 1.1664, 'Mannar': 1.3138, 'Mullaitivu': 1.1523, 'Vavuniya': 1.3168, 'Trincomalee': 1.3925, 'Batticaloa': 1.3948, 'Ampara': 1.3052, 'Puttalam': 1.2720, 'Kurunegala': 1.3398, 'Anuradhapura': 1.3138, 'Polonnaruwa': 1.3187, 'Badulla': 1.3376, 'Monaragala': 1.3331, 'Kegalle': 1.3908, 'Ratnapura': 1.2934},
    requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
},
{ 
    name: "HEALTH PROMOTION", 
    university: "The Gampaha Wickramarachchi University of Indigenous  ", 
    districtRequirements: {'Colombo': 0.5470, 'Gampaha': 0.5446, 'Kalutara': 0.6996, 'Matale': 0.6597, 'Kandy': 0.6750, 'Nuwara Eliya': 0.6223, 'Galle': 0.7049, 'Matara': 0.7267, 'Hambantota': 0.7254, 'Jaffna': 0.6562, 'Kilinochchi': 0.4617, 'Mannar': 0.5700, 'Mullaitivu': 0.5144, 'Vavuniya': 0.5585, 'Trincomalee': 0.5614, 'Batticaloa': 0.6844, 'Ampara': 0.6907, 'Puttalam': 0.6195, 'Kurunegala': 0.7368, 'Anuradhapura': 0.6140, 'Polonnaruwa': 0.6335, 'Badulla': 0.6432, 'Monaragala': 0.6200, 'Kegalle': 0.7229, 'Ratnapura': 0.6395},
    requiredSubjects: [ "Economics", "Geography", "Home Economics", "English", "Communication and Media Studies", "Information & Communication Technology", "Art", "Business Studies", "Agricultural Science", "Accountancy", "Mathematics"]
},
{ 
    name: "NURSING", 
    university: "University of Colombo", 
    districtRequirements: {'Colombo': 1.1929, 'Gampaha': 1.1884, 'Kalutara': 1.1902, 'Matale': "NQC", 'Kandy': "NQC", 'Nuwara Eliya': "NQC", 'Galle': 1.1939, 'Matara': 1.1992, 'Hambantota': 1.2266, 'Jaffna': 1.1993, 'Kilinochchi': 1.1914, 'Mannar': 1.2278, 'Mullaitivu': 1.3856, 'Vavuniya': 1.2567, 'Trincomalee': 1.2220, 'Batticaloa': 1.2015, 'Ampara': 1.1959, 'Puttalam': 1.2663, 'Kurunegala': 1.1910, 'Anuradhapura': 1.3498, 'Polonnaruwa': 1.2157, 'Badulla': 1.2105, 'Monaragala': 1.2349, 'Kegalle': "NQC", 'Ratnapura': 1.1893},
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},
{ 
    name: "NURSING", 
    university: "University of Peradeniya  ", 
    districtRequirements: {'Colombo': 1.2342, 'Gampaha': 1.3383, 'Kalutara': 1.2597, 'Matale': "NQC", 'Kandy': 1.3008, 'Nuwara Eliya': "NQC", 'Galle': 1.2380, 'Matara': 1.2361, 'Hambantota': 1.2339, 'Jaffna': 1.2584, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 1.3160, 'Trincomalee': "NQC", 'Batticaloa': 1.2359, 'Ampara': 1.3846, 'Puttalam': 1.2539, 'Kurunegala': 1.2371, 'Anuradhapura': "NQC", 'Polonnaruwa': 1.2557, 'Badulla': 1.2791, 'Monaragala': 1.2483, 'Kegalle': 1.3187, 'Ratnapura': "NQC"},
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},
{ 
    name: "NURSING", 
    university: "University of Sri Jayewardenepura", 
    districtRequirements: {'Colombo': 1.1442, 'Gampaha': 1.1266, 'Kalutara': 1.1506, 'Matale': 1.1356, 'Kandy': "NQC", 'Nuwara Eliya': "NQC", 'Galle': 1.1330, 'Matara': 1.1294, 'Hambantota': 1.1346, 'Jaffna': 1.1534, 'Kilinochchi': "NQC", 'Mannar': 1.1498, 'Mullaitivu': 1.1769, 'Vavuniya': 1.1376, 'Trincomalee': 1.1790, 'Batticaloa': 1.1378, 'Ampara': 1.1404, 'Puttalam': "NQC", 'Kurunegala': 1.1575, 'Anuradhapura': 1.1753, 'Polonnaruwa': "NQC", 'Badulla': 1.1346, 'Monaragala': 1.1471, 'Kegalle': "NQC", 'Ratnapura': 1.1310},
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},
{ 
    name: "NURSING", 
    university: "University of Jaffna", 
    districtRequirements: {'Colombo': 0.8352, 'Gampaha': 0.8415, 'Kalutara': "NQC", 'Matale': 0.9704, 'Kandy': 0.8495, 'Nuwara Eliya': 0.9030, 'Galle': 1.0061, 'Matara': "NQC", 'Hambantota': "NQC", 'Jaffna': 0.9637, 'Kilinochchi': "NQC", 'Mannar': 0.9179, 'Mullaitivu': 0.9836, 'Vavuniya': 1.0390, 'Trincomalee': 1.0192, 'Batticaloa': 0.9374, 'Ampara': 1.0531, 'Puttalam': 0.9075, 'Kurunegala': 0.8692, 'Anuradhapura': 0.8495, 'Polonnaruwa': 0.8400, 'Badulla': 0.9783, 'Monaragala': 1.1008, 'Kegalle': 0.8498, 'Ratnapura': 0.9134},
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},
{ 
    name: "NURSING", 
    university: "University of Ruhuna", 
    districtRequirements: {'Colombo': 0.8522, 'Gampaha': 0.8532, 'Kalutara': 0.9309, 'Matale': 0.9650, 'Kandy': 0.8955, 'Nuwara Eliya': 0.9177, 'Galle': 0.9826, 'Matara': 1.0174, 'Hambantota': 0.9920, 'Jaffna': 1.0408, 'Kilinochchi': 1.1375, 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 1.0532, 'Trincomalee': "NQC", 'Batticaloa': 1.0013, 'Ampara': 1.0786, 'Puttalam': 0.9236, 'Kurunegala': 0.8531, 'Anuradhapura': 0.8702, 'Polonnaruwa': 0.9358, 'Badulla': 0.9479, 'Monaragala': 1.0118, 'Kegalle': 0.8756, 'Ratnapura': 0.9198},
    requiredSubjects: ["Chemistry", "Physics", "Biology"]
},




//----------------------- page7
{ 
    name: "Nursing", 
    university: "South Eastern University of Sri Lanka",
    districtRequirements : {
        'Colombo': 0.6843, 'Gampaha': "NQC", 'Kalutara': "NQC", 'Matale': 0.7426, 'Kandy': 0.7925, 'Nuwara Eliya': 0.7229, 'Galle': "NQC", 'Matara': "NQC", 'Hambantota': "NQC", 'Jaffna': "NQC", 'Kilinochchi': 1.0353, 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': "NQC", 'Batticaloa': 0.9994, 'Ampara': 1.0082, 'Puttalam': "NQC", 'Kurunegala': 0.8571, 'Anuradhapura': 0.6852, 'Polonnaruwa': 0.7772, 'Badulla': "NQC", 'Monaragala': "NQC", 'Kegalle': 0.8502, 'Ratnapura': 0.9651
    },
  
    requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
},
{ 
    name: "Pharmacy", 
    university: "University of Peradeniya",
    districtRequirements : {
        'Colombo': 1.6162, 'Gampaha': 15741, 'Kalutara': 1.5701, 'Matale': "NQC", 'Kandy': 1.6247, 'Nuwara Eliya': "NOC", 'Galle': 1.5740, 'Matara': "NQC", 'Hambantota': 1.5702, 'Jaffna': 1.5839, 'Kilinochchi': "NOC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 1.5898, 'Trincomalee': 15775, 'Batticaloa': 1.5872, 'Ampara': 1.6125, 'Puttalam': "NQC", 'Kurunegala': 1.5919, 'Anuradhapura': "NQC", 'Polonnaruwa': "NOC", 'Badulla': 1.5731, 'Monaragala': "NOC", 'Kegalle': 15982, 'Ratnapura': 1.5769
    },

    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Pharmacy", 
    university: "University of Sri Jayewardenepura",
    districtRequirements :{
        'Colombo': 1.5306, 'Gampaha': 1.5241, 'Kalutara': 1.5483, 'Matale': 1.5392, 'Kandy': 1.5465, 'Nuwara Eliya': "NQC", 'Galle': 1.5364, 'Matara': 1.5286, 'Hambantota': 1.5269, 'Jaffna': 1.5272, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': 1.5448, 'Vavuniya': 1.5486, 'Trincomalee': 1.5365, 'Batticaloa': 1.5309, 'Ampara': 1.5375, 'Puttalam': 1.5385, 'Kurunegala': 1.5239, 'Anuradhapura': "NQC", 'Polonnaruwa': "NQC", 'Badulla': 1.5611, 'Monaragala': "NQC", 'Kegalle': 1.5232, 'Ratnapura': 1.5460
    },
  
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Pharmacy", 
    university: "University of Jaffna",
    districtRequirements :{
        'Colombo': 1.0952, 'Gampaha': 1.1104, 'Kalutara': "NQC", 'Matale': 1.2052, 'Kandy': 1.2126, 'Nuwara Eliya': 1.0697, 'Galle': "NQC", 'Matara': "NQC", 'Hambantota': "NQC", 'Jaffna': 1.5035, 'Kilinochchi': 1.5336, 'Mannar': 1.3911, 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.4968, 'Batticaloa': 1.4891, 'Ampara': 1.4945, 'Puttalam': 1.3962, 'Kurunegala': 1.4706, 'Anuradhapura': 1.1827, 'Polonnaruwa': 1.1162, 'Badulla': 1.3813, 'Monaragala': 1.3157, 'Kegalle': "NQC", 'Ratnapura': "NQC"
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Pharmacy", 
    university: "University of Ruhuna",
    districtRequirements : {
        'Colombo': "NQC", 'Gampaha': 1.3994, 'Kalutara': 1.4321, 'Matale': "NQC", 'Kandy': 1.3965, 'Nuwara Eliya': "NQC", 'Galle': 1.4923, 'Matara': 1.4764, 'Hambantota': 1.4849, 'Jaffna': "NQC", 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': 1.4506, 'Vavuniya': 1.4387, 'Trincomalee': "NQC", 'Batticaloa': 1.5034, 'Ampara': 1.4550, 'Puttalam': 1.4419, 'Kurunegala': 1.4114, 'Anuradhapura': "NQC", 'Polonnaruwa': "NQC", 'Badulla': 1.4547, 'Monaragala': 1.4405, 'Kegalle': 1.5006, 'Ratnapura': 1.4190
    },
  
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Medical Laboratory Sciences", 
    university: "University of Peradeniya",
    districtRequirements : {
        'Colombo': 1.7167, 'Gampaha': "NQC", 'Kalutara': 1.7401, 'Matale': "NQC", 'Kandy': 1.7092, 'Nuwara Eliya': "NQC", 'Galle': 1.7304, 'Matara': 1.7120, 'Hambantota': 1.7054, 'Jaffna': 1.7561, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': "NQC", 'Batticaloa': 1.7382, 'Ampara': 1.7194, 'Puttalam': "NQC", 'Kurunegala': 1.7054, 'Anuradhapura': "NQC", 'Polonnaruwa': "NQC", 'Badulla': "NQC", 'Monaragala': "NQC", 'Kegalle': 1.7271, 'Ratnapura': 1.7051
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Medical Laboratory Sciences", 
    university: "University of Sri Jayewardenepura",
    districtRequirements : {
        'Colombo': 1.7167, 'Gampaha': "NQC", 'Kalutara': 1.7401, 'Matale': "NQC", 'Kandy': 1.7092, 'Nuwara Eliya': "NQC", 'Galle': 1.7304, 'Matara': 1.7120, 'Hambantota': 1.7054, 'Jaffna': 1.7561, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': "NQC", 'Batticaloa': 1.7382, 'Ampara': 1.7194, 'Puttalam': "NQC", 'Kurunegala': 1.7054, 'Anuradhapura': "NQC", 'Polonnaruwa': "NQC", 'Badulla': "NQC", 'Monaragala': "NQC", 'Kegalle': 1.7271, 'Ratnapura': 1.7051
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Medical Laboratory Sciences", 
    university: "University of Jaffna",
    districtRequirements : {
        'Colombo': 1.4305, 'Gampaha': 1.3056, 'Kalutara': "NQC", 'Matale': 1.3990, 'Kandy': 1.4771, 'Nuwara Eliya': 1.1843, 'Galle': 1.6107, 'Matara': "NQC", 'Hambantota': "NQC", 'Jaffna': 1.6436, 'Kilinochchi': 1.5983, 'Mannar': 1.5085, 'Mullaitivu': 1.6030, 'Vavuniya': 1.6158, 'Trincomalee': 1.6113, 'Batticaloa': 1.6084, 'Ampara': 1.6454, 'Puttalam': 1.5206, 'Kurunegala': "NQC", 'Anuradhapura': 1.3768, 'Polonnaruwa': 1.1836, 'Badulla': 1.5035, 'Monaragala': 1.4777, 'Kegalle': "NQC", 'Ratnapura': 1.5615
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Medical Laboratory Sciences", 
    university: "University of Ruhuna",
    districtRequirements : {
        'Colombo': 1.5562, 'Gampaha': 1.5674, 'Kalutara': 1.5970, 'Matale': 1.6323, 'Kandy': 1.5533, 'Nuwara Eliya': "NQC", 'Galle': 1.6253, 'Matara': 1.5984, 'Hambantota': 1.6116, 'Jaffna': "NQC", 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.6224, 'Batticaloa': 1.6084, 'Ampara': 1.5551, 'Puttalam': 1.5445, 'Kurunegala': 1.5939, 'Anuradhapura': "NQC", 'Polonnaruwa': "NQC", 'Badulla': 1.5724, 'Monaragala': "NQC", 'Kegalle': 1.5833, 'Ratnapura': 1.5562
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Radiography", 
    university: "University of Ruhuna",
    districtRequirements : {
        'Colombo': 1.4253, 'Gampaha': 1.4341, 'Kalutara': 1.4866, 'Matale': 1.3570, 'Kandy': 1.3905, 'Nuwara Eliya': 1.2336, 'Galle': 1.4146, 'Matara': 1.4687, 'Hambantota': 1.5502, 'Jaffna': 1.5571, 'Kilinochchi': 1.5570, 'Mannar': 1.4238, 'Mullaitivu': 1.4904, 'Vavuniya': 1.4813, 'Trincomalee': 1.5627, 'Batticaloa': 1.5164, 'Ampara': 1.5723, 'Puttalam': 1.5429, 'Kurunegala': 1.5505, 'Anuradhapura': 1.4098, 'Polonnaruwa': 1.2645, 'Badulla': 1.4799, 'Monaragala': 1.5449, 'Kegalle': 1.5750, 'Ratnapura': 1.5037
    },
   
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Physiotherapy", 
    university: "University of Colombo",
    districtRequirements : {
        'Colombo': 1.4253, 'Gampaha': 1.4341, 'Kalutara': 1.4866, 'Matale': 1.3570, 'Kandy': 1.3905, 'Nuwara Eliya': 1.2336, 'Galle': 1.4146, 'Matara': 1.4687, 'Hambantota': 1.5502, 'Jaffna': 1.5571, 'Kilinochchi': 1.5570, 'Mannar': 1.4238, 'Mullaitivu': 1.4904, 'Vavuniya': 1.4813, 'Trincomalee': 1.5627, 'Batticaloa': 1.5164, 'Ampara': 1.5723, 'Puttalam': 1.5429, 'Kurunegala': 1.5505, 'Anuradhapura': 1.4098, 'Polonnaruwa': 1.2645, 'Badulla': 1.4799, 'Monaragala': 1.5449, 'Kegalle': 1.5750, 'Ratnapura': 1.5037
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics","Mathematics","Higher Mathematics","Combined Mathematics"] 
},
{ 
    name: "Physiotherapy", 
    university: "University of Peradeniya",
    districtRequirements : {
        'Colombo': 1.6537, 'Gampaha': "NQC", 'Kalutara': 1.6928, 'Matale': "NQC", 'Kandy': 1.6857, 'Nuwara Eliya': "NQC", 'Galle': 1.6966, 'Matara': 1.6836, 'Hambantota': 1.6695, 'Jaffna': 1.6759, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.6555, 'Batticaloa': 1.6657, 'Ampara': 1.7007, 'Puttalam': "NQC", 'Kurunegala': 1.6734, 'Anuradhapura': "NQC", 'Polonnaruwa': "NQC", 'Badulla': "NQC", 'Monaragala': "NQC", 'Kegalle': "NQC", 'Ratnapura': 1.6648
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics","Mathematics","Higher Mathematics","Combined Mathematics"] 
},
{ 
    name: "Occupational Therapy", 
    university: "University of Kelaniya",
    districtRequirements : {
        'Colombo': 1.2904, 'Gampaha': 1.1592, 'Kalutara': 1.3673, 'Matale': 1.2230, 'Kandy': 1.2908, 'Nuwara Eliya': 1.1088, 'Galle': 1.3834, 'Matara': 1.4317, 'Hambantota': 1.3729, 'Jaffna': 1.3996, 'Kilinochchi': 1.3590, 'Mannar': 1.0102, 'Mullaitivu': 1.4198, 'Vavuniya': 1.3074, 'Trincomalee': 1.3189, 'Batticaloa': 1.4293, 'Ampara': 1.4318, 'Puttalam': 1.4324, 'Kurunegala': 1.3718, 'Anuradhapura': 1.1897, 'Polonnaruwa': 1.1833, 'Badulla': 1.3150, 'Monaragala': 1.3262, 'Kegalle': 1.3786, 'Ratnapura': 1.3096
    },
   
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Optometry", 
    university: "University of Sri Jayewardenepura",
    districtRequirements : {
        'Colombo': 1.4086, 'Gampaha': 1.2372, 'Kalutara': 1.3898, 'Matale': 1.3834, 'Kandy': 1.3863, 'Nuwara Eliya': 1.1477, 'Galle': 1.3966, 'Matara': 1.4537, 'Hambantota': 1.4359, 'Jaffna': 1.4772, 'Kilinochchi': 1.4050, 'Mannar': 1.3446, 'Mullaitivu': 1.4866, 'Vavuniya': 1.3532, 'Trincomalee': 1.4911, 'Batticaloa': 1.4700, 'Ampara': 1.4633, 'Puttalam': 1.4935, 'Kurunegala': 1.4388, 'Anuradhapura': 1.1741, 'Polonnaruwa': 1.0784, 'Badulla': 1.3195, 'Monaragala': 1.4246, 'Kegalle': 1.4595, 'Ratnapura': 1.4414
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Environmental Conservation & Management", 
    university: "University of Kelaniya",
    districtRequirements : {
        'Colombo': 0.8010, 'Gampaha': 0.8661, 'Kalutara': 0.8829, 'Matale': 0.7818, 'Kandy': 0.8357, 'Nuwara Eliya': 0.7375, 'Galle': 0.9434, 'Matara': 0.9402, 'Hambantota': 0.9750, 'Jaffna': 0.6446, 'Kilinochchi': 0.4486, 'Mannar': 0.9298, 'Mullaitivu': 0.9779, 'Vavuniya': 0.6177, 'Trincomalee': 0.6674, 'Batticaloa': 0.6503, 'Ampara': 0.8476, 'Puttalam': 0.8203, 'Kurunegala': 0.8450, 'Anuradhapura': 0.7954, 'Polonnaruwa': 0.8926, 'Badulla': 0.8250, 'Monaragala': 0.7508, 'Kegalle': 0.9707, 'Ratnapura': 0.9048
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Agricultural Science"] 
},
{ 
    name: "Applied Chemistry", 
    university: "University of Kelaniya",
    districtRequirements : {
        'Colombo': 1.4664, 'Gampaha': 1.4405, 'Kalutara': 1.4741, 'Matale': 1.3373, 'Kandy': 1.3994, 'Nuwara Eliya': 1.2978, 'Galle': 1.4173, 'Matara': 1.4785, 'Hambantota': 1.4686, 'Jaffna': 1.3710, 'Kilinochchi': 0.9322, 'Mannar': 1.0410, 'Mullaitivu': 0.9189, 'Vavuniya': 0.8452, 'Trincomalee': 1.2645, 'Batticaloa': 1.4021, 'Ampara': 1.4615, 'Puttalam': 1.3995, 'Kurunegala': 1.4146, 'Anuradhapura': 1.3664, 'Polonnaruwa': 1.2529, 'Badulla': 1.3300, 'Monaragala': 1.3832, 'Kegalle': 1.3978, 'Ratnapura': 1.4141
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Agricultural Science"] 
},
{ 
    name: "Electronics and Computer Science", 
    university: "University of Kelaniya",
    districtRequirements : {
        'Colombo': 1.4536, 'Gampaha': 1.4319, 'Kalutara': 1.4332, 'Matale': 1.4430, 'Kandy': 1.4093, 'Nuwara Eliya': 0.9738, 'Galle': 1.4452, 'Matara': 1.4616, 'Hambantota': 1.4254, 'Jaffna': 1.4517, 'Kilinochchi': 1.0147, 'Mannar': 1.0521, 'Mullaitivu': 0.9422, 'Vavuniya': 1.2451, 'Trincomalee': 1.1905, 'Batticaloa': 1.4344, 'Ampara': 1.1898, 'Puttalam': 1.2916, 'Kurunegala': 1.4234, 'Anuradhapura': 1.3349, 'Polonnaruwa': 1.2973, 'Badulla': 1.3951, 'Monaragala': 1.3710, 'Kegalle': 1.4044, 'Ratnapura': 1.4149
    },
    
    requiredSubjects: ["Information & Communication Technology", "Chemistry", "Physics","Combined Mathematics",] 
},
{ 
    name: "Accounting Information Systems", 
    university: "University of Kelaniya",
    districtRequirements : {
        'Colombo': 1.6551, 'Gampaha': 1.5243, 'Kalutara': 1.7029, 'Matale': 1.5773, 'Kandy': 1.4866, 'Nuwara Eliya': 1.6650, 'Galle': 1.5494, 'Matara': 1.6972, 'Hambantota': 1.6388, 'Jaffna': 1.4075, 'Kilinochchi': 'NQC', 'Mannar': 1.0883, 'Mullaitivu': -0.2361, 'Vavuniya': 1.0641, 'Trincomalee': 1.5726, 'Batticaloa': 1.6337, 'Ampara': 1.6489, 'Puttalam': 1.7022, 'Kurunegala': 1.6647, 'Anuradhapura': 1.5635, 'Polonnaruwa': 1.6929, 'Badulla': 1.5592, 'Monaragala': 1.7148, 'Kegalle': 1.7144, 'Ratnapura': 1.7204
    },
  
    requiredSubjects: ["Accounting", "Economics", "Business Studies","Business Statistics","Information & Communication Technology"] 
},
{ 
    name: "Fisheries & Marine Sciences", 
    university: "University of Ruhuna",
    districtRequirements : {
        'Colombo': 0.6364, 'Gampaha': 0.5586, 'Kalutara': 0.7498, 'Matale': 0.7222, 'Kandy': 0.6057, 'Nuwara Eliya': 0.5771, 'Galle': 0.6993, 'Matara': 0.7220, 'Hambantota': 0.7208, 'Jaffna': 0.6113, 'Kilinochchi': 0.4242, 'Mannar': 0.4677, 'Mullaitivu': 0.6402, 'Vavuniya': 0.4123, 'Trincomalee': 0.5575, 'Batticaloa': 0.5615, 'Ampara': 0.6243, 'Puttalam': 0.5322, 'Kurunegala': 0.6808, 'Anuradhapura': 0.5574, 'Polonnaruwa': 0.4872, 'Badulla': 0.6684, 'Monaragala': 0.6880, 'Kegalle': 0.6958, 'Ratnapura': 0.7058
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics"] 
},
{ 
    name: "Animal Science & Fisheries", 
    university: "University of Peradeniya",
    districtRequirements : {
        'Colombo': 0.9481, 'Gampaha': 1.0099, 'Kalutara': 1.0219, 'Matale': 0.9340, 'Kandy': 1.0044, 'Nuwara Eliya': 0.9404, 'Galle': 1.0082, 'Matara': 0.9949, 'Hambantota': 1.0460, 'Jaffna': 1.0147, 'Kilinochchi': 1.0118, 'Mannar': 0.3409, 'Mullaitivu': 0.8046, 'Vavuniya': 0.4319, 'Trincomalee': 0.5905, 'Batticaloa': 1.0512, 'Ampara': 0.7761, 'Puttalam': 0.9096, 'Kurunegala': 1.0332, 'Anuradhapura': 0.8369, 'Polonnaruwa': 0.9751, 'Badulla': 0.9895, 'Monaragala': 1.0657, 'Kegalle': 1.0004, 'Ratnapura': 1.0032
    },
    
    requiredSubjects: ["Biology", "Chemistry", "Physics","Agricultural Science"] 
},
{ 
    name: "Food Production & Technology Management", 
    university: "Wayamba University of Sri Lanka",
    districtRequirements : {
        'Colombo': 0.7182, 'Gampaha': 0.8552, 'Kalutara': 0.9020, 'Matale': 0.8352, 'Kandy': 0.9292, 'Nuwara Eliya': 0.7283, 'Galle': 0.8833, 'Matara': 0.9253, 'Hambantota': 0.9657, 'Jaffna': 0.8549, 'Kilinochchi': 0.7285, 'Mannar': 0.8604, 'Mullaitivu': 0.5136, 'Vavuniya': 0.8849, 'Trincomalee': 0.7388, 'Batticaloa': 0.6946, 'Ampara': 0.7503, 'Puttalam': 0.9316, 'Kurunegala': 0.9156, 'Anuradhapura': 0.8638, 'Polonnaruwa': 0.7492, 'Badulla': 0.8575, 'Monaragala': 0.9543, 'Kegalle': 0.9211, 'Ratnapura': 0.8539
    },
   
    requiredSubjects: ["Biology", "Chemistry", "Physics","Agricultural Science","Mathematics"] 
},
{ 
    name: "Management and Information Technology (SEUSL)", 
    university: "South Eastern University of Sri Lanka",
    districtRequirements : {
        'Colombo': 1.3457, 'Gampaha': 1.4300, 'Kalutara': 1.4332, 'Matale': 1.5725, 'Kandy': 1.5037, 'Nuwara Eliya': 1.3993, 'Galle': 1.5275, 'Matara': 1.4749, 'Hambantota': 1.3632, 'Jaffna': 1.5027, 'Kilinochchi': 1.4104, 'Mannar': 1.5983, 'Mullaitivu': 1.5620, 'Vavuniya': 1.5617, 'Trincomalee': 1.5828, 'Batticaloa': 1.5841, 'Ampara': 1.5920, 'Puttalam': 1.5525, 'Kurunegala': 1.4961, 'Anuradhapura': 1.4766, 'Polonnaruwa': 1.3861, 'Badulla': 1.4761, 'Monaragala': 1.4126, 'Kegalle': 1.5412, 'Ratnapura': 1.4501
    },
   
    requiredSubjects: ["Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","Chinese","Chemistry","Christian Civilization","Christianity","Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French" , "Food Technology","Geography","German","Greek and Roman Civilization","Hindi","Hindu Civilization","Hinduism","History of India","History of Europe","History of Morden World","Home Economics","Higher Mathematics","Islam","slam Civilization","Information & Communication Technology","Japanese","Korean","Logic and Scientific Method","Mathematics","Mechanical Technology","Malay","Oriental Music","Pali","Physics","Political Science","Russian","Science for Technology","Sanskrit","Sinhala"] 
},
//----------------------- page8
{ 
    name: "COMPUTING & INFORMATION SYSTEMS", 
    university: "Sabaragamuwa University of Sri Lanka", 
    districtRequirements: {'Colombo': 1.0381, 'Gampaha': 1.0380, 'Kalutara': 1.1007, 'Matale': 0.8558,'Kandy': 0.9399, 'Nuwara Eliya': 0.5573, 'Galle': 1.0840, 'Matara': 1.1215,'Hambantota': 1.0793, 'Jaffna': 1.1011, 'Kilinochchi': 0.9562, 'Mannar': 0.5667,'Mullaitivu': 0.5171, 'Vavuniya': 1.0640, 'Trincomalee': 0.9920, 'Batticaloa': 1.0319,'Ampara': 1.0374, 'Puttalam': 1.0346, 'Kurunegala': 1.0631, 'Anuradhapura': 0.9517,'Polonnaruwa': 0.7058, 'Badulla': 1.0868, 'Monaragala': 1.0141, 'Kegalle': 0.9452,'Ratnapura': 1.0474},
    requiredSubjects: ["Combined Mathematics","Physics","Higher Mathematics","Chemistry","Information & Communication Technology"] 
},

//-----------------------  
{ 
    name: "Data Science", 
    university: "Sabaragamuwa University of Sri Lanka", 
    districtRequirements: {'Colombo': 1.3613, 'Gampaha': 1.3505, 'Kalutara': 1.4172,'Matale': 1.1836,'Kandy': 1.3509,'Nuwara Eliya': 0.9592,'Galle': 1.3813,'Matara': 1.4020,'Hambantota': 1.4023,'Jaffna': 1.3979,'Kilinochchi': 1.0163,'Mannar': 0.5768,'Mullaitivu': 0.5742,'Vavuniya': 1.1215,'Trincomalee': 1.2470,'Batticaloa': 1.2586,'Ampara': 1.3876,'Puttalam': 1.2104,'Kurunegala': 1.3894,'Anuradhapura': 1.3049,'Polonnaruwa': 1.2577,'Badulla': 1.3884, 'Monaragala': 1.3114, 'Kegalle': 1.3966,'Ratnapura': 1.3317},
    requiredSubjects: ["Combined Mathematics","Physics","Higher Mathematics","Chemistry","Information & Communication Technology"] 
},

//-----------------------        
{ 
    name: "Physical Education", 
    university: "Sabaragamuwa University of Sri Lanka", 
    districtRequirements: {'Colombo': -0.1884,'Gampaha': -0.7530,'Kalutara': -0.3062,'Matale': -0.5104,'Kandy': -0.5743,'Nuwara Eliya': -0.4330,'Galle': 'NQC','Matara': 0.1621,'Hambantota': -0.3248,'Jaffna': 0.7122,'Kilinochchi': 'NQC','Mannar': 0.2804,'Mullaitivu': 0.3150,'Vavuniya': 'NQC','Trincomalee': -0.4270,'Batticaloa': -0.2996,'Ampara': 0.1651,'Puttalam': -0.2763,'Kurunegala': -0.0164,'Anuradhapura': -0.7030,'Polonnaruwa': 'NQC','Badulla': -0.4326,'Monaragala': 0.1575,'Kegalle': 0.0744,'Ratnapura': -0.4763},
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical, Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam", "Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"]

},

//-----------------------  
{ 
    name: "Sports Science & Management",
    university: "University of Sri Jayewardenepura",
    districtRequirements: {'Colombo': 0.8551, 'Gampaha': 0.8391, 'Kalutara': 0.8588, 'Matale': 'NQC', 'Kandy': 0.9146,'Nuwara Eliya': 1.1030, 'Galle': 0.8627, 'Matara': 1.2009, 'Hambantota': 1.0829, 'Jaffna': 'NQC','Kilinochchi': 1.1502, 'Mannar': 'NQC', 'Mullaitivu': 0.9354, 'Vavuniya': 'NQC', 'Trincomalee': 0.9992,'Batticaloa': 0.9427, 'Ampara': 1.2696, 'Puttalam': 0.8768, 'Kurunegala': 1.0252, 'Anuradhapura': 'NQC','Polonnaruwa': 1.0606, 'Badulla': 0.8570, 'Monaragala': 'NQC', 'Kegalle': 1.0454, 'Ratnapura': 0.8375},
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical, Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam", "Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"]
},

//-----------------------
{ 
    name: "Physical Education",
    university: "University of Jaffna",
    districtRequirements: {'Colombo': 0.1613, 'Gampaha': 0.0300, 'Kalutara': 'NQC', 'Matale': 'NQC', 'Kandy': 'NQC','Nuwara Eliya': 0.2803, 'Galle': 'NQC', 'Matara': 'NQC', 'Hambantota': 'NQC', 'Jaffna': 0.1970,'Kilinochchi': 0.3664, 'Mannar': 0.7151, 'Mullaitivu': 0.5126, 'Vavuniya': 0.1970, 'Trincomalee': 0.1176,'Batticaloa': 0.2359, 'Ampara': 0.0565, 'Puttalam': -0.0226, 'Kurunegala': 1.0374, 'Anuradhapura': 0.0136,'Polonnaruwa': 'NQC', 'Badulla': 'NQC', 'Monaragala': 'NQC', 'Kegalle': 'NQC', 'Ratnapura': 'NQC'},
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical, Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam", "Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"]

},

//-----------------------
{ 
    name: "Sports Science & Management",
    university: "University of Kelaniya",
    districtRequirements: {'Colombo': 0.6632, 'Gampaha': 0.6882, 'Kalutara': 0.7368, 'Matale': 0.7824, 'Kandy': 0.6672,'Nuwara Eliya': 1.0894, 'Galle': 0.6865, 'Matara': 0.8214, 'Hambantota': 0.6952, 'Jaffna': 'NQC','Kilinochchi': 'NQC', 'Mannar': 0.8277, 'Mullaitivu': 'NQC', 'Vavuniya': 'NQC', 'Trincomalee': 'NQC','Batticaloa': 0.9496, 'Ampara': 0.6881, 'Puttalam': 0.7317, 'Kurunegala': 'NQC', 'Anuradhapura': 0.9622,'Polonnaruwa': 'NQC', 'Badulla': 'NQC', 'Monaragala': 0.7164, 'Kegalle': 'NQC', 'Ratnapura': 'NQC'},
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical, Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam", "Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"]
},

//-----------------------

{ 
    name: "Sports Science & Management",
    university: "Sabaragamuwa University of Sri Lanka",
    districtRequirements: {'Colombo': 0.5376, 'Gampaha': 0.5532, 'Kalutara': 0.4018, 'Matale': 0.4505, 'Kandy': 0.7381,'Nuwara Eliya': -0.3100, 'Galle': 0.1814, 'Matara': 0.4293, 'Hambantota': 0.2507, 'Jaffna': -0.3480,'Kilinochchi': 0.9333, 'Mannar': 'NQC', 'Mullaitivu': 'NQC', 'Vavuniya': 'NQC', 'Trincomalee': 0.2434,'Batticaloa': -0.1692, 'Ampara': 0.4199, 'Puttalam': 0.7034, 'Kurunegala': 0.3235, 'Anuradhapura': 0.1540,'Polonnaruwa': -0.2250, 'Badulla': 0.3061, 'Monaragala': 0.5453, 'Kegalle': 0.2845, 'Ratnapura': 0.4114},
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical, Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam", "Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"]
},

//-----------------------
{ 
    name: "Speech and Hearing Sciences",
    university: "University of Kelaniya",
    districtRequirements: {'Colombo': 1.3018, 'Gampaha': 1.5693, 'Kalutara': 1.5179, 'Matale': 1.5218, 'Kandy': 1.4592,'Nuwara Eliya': 1.1876, 'Galle': 1.3344, 'Matara': 1.2648, 'Hambantota': 1.4845, 'Jaffna': 1.3580,'Kilinochchi': 0.3224, 'Mannar': 1.4451, 'Mullaitivu': 0.9655, 'Vavuniya': 1.0210, 'Trincomalee': 1.2910,'Batticaloa': 1.5633, 'Ampara': 1.5559, 'Puttalam': 1.3925, 'Kurunegala': 1.4361, 'Anuradhapura': 1.2651,'Polonnaruwa': 0.8484, 'Badulla': 1.3959, 'Monaragala': 1.2657, 'Kegalle': 1.4631, 'Ratnapura': 1.4130},
    requiredSubjects: ["Economics", "Geography", "History", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology", "Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization", "Sinhala", "Baratha", "Oriental Music", "Carnatic Music", "Western Music", "Tamil", "English"]

},

//----------------------
{ 
    name: "Tourism & Hospitality Management",
    university: "Rajarata University of Sri Lanka",
    districtRequirements: {'Colombo': 1.3170, 'Gampaha': 1.4184, 'Kalutara': 1.3726, 'Matale': 1.4645, 'Kandy': 1.4195,'Nuwara Eliya': 1.4555, 'Galle': 1.4395, 'Matara': 'NQC', 'Hambantota': 1.3499, 'Jaffna': 1.1544,'Kilinochchi': 1.4279, 'Mannar': 1.4990, 'Mullaitivu': 'NQC', 'Vavuniya': 'NQC', 'Trincomalee': 1.2201,'Batticaloa': 1.1673, 'Ampara': 1.3212, 'Puttalam': 1.3726, 'Kurunegala': 1.4894, 'Anuradhapura': 1.4365,'Polonnaruwa': 'NQC', 'Badulla': 'NQC', 'Monaragala': 1.3814, 'Kegalle': 1.4590, 'Ratnapura': 1.4802},
    requiredSubjects: ["Economics", "Geography", "Business Statistics"]
    
},
//-----------------------
{ 
    name: "Tourism & Hospitality Management",
    university: "Sabaragamuwa University of Sri Lanka",
    districtRequirements: {'Colombo': 1.4437, 'Gampaha': 1.4381, 'Kalutara': 1.4432, 'Matale': 1.4457, 'Kandy': 1.4530,'Nuwara Eliya': 1.4527, 'Galle': 1.4384, 'Matara': 1.4684, 'Hambantota': 1.4956, 'Jaffna': 'NQC','Kilinochchi': 'NQC', 'Mannar': 'NQC', 'Mullaitivu': 1.4803, 'Vavuniya': 1.4549, 'Trincomalee': 'NQC','Batticaloa': 'NQC', 'Ampara': 'NQC', 'Puttalam': 1.4579, 'Kurunegala': 1.4793, 'Anuradhapura': 1.4532,'Polonnaruwa': 1.4531, 'Badulla': 1.4505, 'Monaragala': 1.5647, 'Kegalle': 1.4721, 'Ratnapura': 1.4721 },
    requiredSubjects: ["Economics", "Geography", "Business Statistics"]         
},

//-----------------------
{ 
    name: "Agricultural Resource Management and Technology",
    university: "University of Ruhuna",
    districtRequirements: {'Colombo': 0.5485, 'Gampaha': 0.5856, 'Kalutara': 0.8142, 'Matale': 0.7527, 'Kandy': 0.8096,'Nuwara Eliya': 0.6879, 'Galle': 0.8234, 'Matara': 0.7875, 'Hambantota': 0.8346, 'Jaffna': 0.5905,'Kilinochchi': 0.4538, 'Mannar': 0.4403, 'Mullaitivu': 0.3533, 'Vavuniya': 0.4802, 'Trincomalee': 0.4761,'Batticaloa': 0.5988, 'Ampara': 0.5950, 'Puttalam': 0.5939, 'Kurunegala': 0.8216, 'Anuradhapura': 0.7831,'Polonnaruwa': 0.8683, 'Badulla': 0.6813, 'Monaragala': 0.7453, 'Kegalle': 0.7493, 'Ratnapura': 0.8147},
    requiredSubjects: ["(i) Chemistry; Physics; and Biology","(ii) Chemistry; Physics or Mathematics; Biology or Agricultural Science","(iii) Chemistry; Biology; Agricultural Science or Mathematics"]
},

//------------------------

{ 
    name: "Agri Business Management",
    university: "University of Ruhuna",
    districtRequirements: {'Colombo': 0.5777, 'Gampaha': 0.6726, 'Kalutara': 0.7680, 'Matale': 0.7257, 'Kandy': 0.7283,'Nuwara Eliya': 0.7686, 'Galle': 0.7902, 'Matara': 0.7723, 'Hambantota': 0.7755, 'Jaffna': 0.7075,'Kilinochchi': 0.4114, 'Mannar': 0.2939, 'Mullaitivu': 0.2891, 'Vavuniya': 0.2904, 'Trincomalee': 0.6009,'Batticaloa': 0.6158, 'Ampara': 0.6398, 'Puttalam': 0.5053, 'Kurunegala': 0.7690, 'Anuradhapura': 0.7446,'Polonnaruwa': 0.6871, 'Badulla': 0.6680, 'Monaragala': 0.5931, 'Kegalle': 0.7444, 'Ratnapura': 0.7499},
    requiredSubjects: ["Physics", "Agricultural Science", "Food Technology", "Bio - Resource Technology", "Agro Technology"]
},
//------------------------
{ 
    name: "Green Technology",
    university: "University of Ruhuna",
    districtRequirements: {'Colombo': 0.7413, 'Gampaha': 0.7273, 'Kalutara': 0.8642, 'Matale': 0.6429, 'Kandy': 0.8093,'Nuwara Eliya': 0.7087, 'Galle': 0.8870, 'Matara': 0.8585, 'Hambantota': 0.8963, 'Jaffna': 0.7102,'Kilinochchi': 0.6769, 'Mannar': 0.7586, 'Mullaitivu': 0.2835, 'Vavuniya': 0.6147, 'Trincomalee': 0.8682,'Batticaloa': 0.7257, 'Ampara': 0.5809, 'Puttalam': 0.7556, 'Kurunegala': 0.7867, 'Anuradhapura': 0.5755,'Polonnaruwa': 0.5520, 'Badulla': 0.7388, 'Monaragala': 0.7615, 'Kegalle': 0.8738, 'Ratnapura': 0.8890},
    requiredSubjects: ["Physics", "Agricultural Science", "Food Technology"]
},
//------------------------
{ 
    name: "Science and Technology",
    university: "Uva Wellassa University of Sri Lanka",
    districtRequirements: {'Colombo': 0.8494,'Gampaha': 0.8468,'Kalutara': 0.9380,'Matale': 0.9858,'Kandy': 0.8327,'Nuwara Eliya': 0.6925,'Galle': 0.9558,'Matara': 0.9577,'Hambantota': 0.9695,'Jaffna': 0.9713,'Kilinochchi': 0.8768,'Mannar': 0.8824,'Mullaitivu': 0.4364,'Vavuniya': 0.9780,'Trincomalee': 0.9462,'Batticaloa': 0.9086,'Ampara': 0.8652,'Puttalam': 0.7852,'Kurunegala': 0.9110,'Anuradhapura': 0.8199,'Polonnaruwa': 0.5703,'Badulla': 0.9377,'Monaragala': 0.7486,'Kegalle': 0.8652,'Ratnapura': 0.8413 },  
    requiredSubjects: ["Agricultural Science","Higher Mathematics","Mathematics","Combined Mathematics","Physics","Combined Mathematics","Higher Mathematics","Chemistry ", "Physics","Agricultural Science","Combined Mathematics","Biology","Higher Mathematics","Chemistry","Physics"]
},
//-------------------------

{ 
    name: "Computer Science & Technology",
    university:"Uva Wellassa University of Sri Lanka",
    districtRequirements: { 'Colombo': 0.8917, 'Gampaha': 0.9083, 'Kalutara': 1.0705, 'Matale': 0.8601, 'Kandy': 0.9592, 'Nuwara Eliya': 0.5418, 'Galle': 1.0906, 'Matara': 1.0776, 'Hambantota': 1.0951, 'Jaffna': 1.1189, 'Kilinochchi': 0.8339, 'Mannar': 1.1309, 'Mullaitivu': 0.5434, 'Vavuniya': 1.0911, 'Trincomalee': 0.8372, 'Batticaloa': 1.0657, 'Ampara': 1.0531, 'Puttalam': 0.9228, 'Kurunegala': 0.9779, 'Anuradhapura': 0.8742, 'Polonnaruwa': 0.5404, 'Badulla': 0.8487, 'Monaragala': 0.9530, 'Kegalle': 1.0737, 'Ratnapura': 0.9621 },
    requiredSubjects: ["Agricultural Science","Higher Mathematics","Mathematics","Combined Mathematics","Physics","Combined Mathematics","Higher Mathematics","Chemistry ", "Physics","Agricultural Science","Combined Mathematics","Biology","Higher Mathematics","Chemistry","Physics","Information & Communication Technology"]
},
//-------------------------
{ 
    name: "Entrepreneurship and Management",
    university: "Uva Wellassa University of Sri Lanka",
    districtRequirements: {'Colombo': 1.2281, 'Gampaha': 1.2471, 'Kalutara': 1.2467, 'Matale': 1.2430, 'Kandy': 1.2494,'Nuwara Eliya': 1.1206, 'Galle': 1.2645, 'Matara': 1.2770, 'Hambantota': 1.1057, 'Jaffna': 0.7803,'Kilinochchi': 1.0459, 'Mannar': 1.0520, 'Mullaitivu': 1.0752, 'Vavuniya': 1.0970, 'Trincomalee': 1.1342,'Batticaloa': 0.9905, 'Ampara': 1.0282, 'Puttalam': 1.1519, 'Kurunegala': 1.2452, 'Anuradhapura': 1.2194,'Polonnaruwa': 1.0312, 'Badulla': 1.2359, 'Monaragala': 1.2173, 'Kegalle': 1.2186, 'Ratnapura': 1.2385},
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical, Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam", "Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"]
},

//--------------------------

{ 
    name: "Entrepreneurship and Management",
    university: "Uva Wellassa University of Sri Lanka",
    districtRequirements: {'Colombo': 1.2281, 'Gampaha': 1.2471, 'Kalutara': 1.2467, 'Matale': 1.2430, 'Kandy': 1.2494,'Nuwara Eliya': 1.1206, 'Galle': 1.2645, 'Matara': 1.2770, 'Hambantota': 1.1057, 'Jaffna': 0.7803,'Kilinochchi': 1.0459, 'Mannar': 1.0520, 'Mullaitivu': 1.0752, 'Vavuniya': 1.0970, 'Trincomalee': 1.1342,'Batticaloa': 0.9905, 'Ampara': 1.0282, 'Puttalam': 1.1519, 'Kurunegala': 1.2452, 'Anuradhapura': 1.2194,'Polonnaruwa': 1.0312, 'Badulla': 1.2359, 'Monaragala': 1.2173, 'Kegalle': 1.2186, 'Ratnapura': 1.2385},
    requiredSubjects: ["Accounting", "Agricultural Science", "Agro Technology", "Art", "Arabic", "Biology", "Bio-Resource Technology", "Bio System Technology", "Business Statistics", "Business Studies", "Buddhism", "Buddhist Civilization", "Carnatic Music", "Chinese", "Chemistry", "Christian Civilization", "Christianity", "Civil Technology", "Communication & Media Studies", "Combined Mathematics", "Dancing (Indigenous)", "Dancing (Bharata)", "Drama and Theatre (Sinhala)", "Drama and Theatre (Tamil)", "Drama and Theatre (English)", "Economics", "Electrical, Electronic and Information Technology", "Engineering Technology", "English", "French", "Food Technology", "Geography", "German", "Greek and Roman Civilization", "Hindi", "Hindu Civilization", "Hinduism", "History of India", "History of Europe", "History of Modern World", "Home Economics", "Higher Mathematics", "Islam", "Islam Civilization", "Information & Communication Technology", "Japanese", "Korean", "Logic and Scientific Method", "Mathematics", "Mechanical Technology", "Malay", "Oriental Music", "Pali", "Physics", "Political Science", "Russian", "Science for Technology", "Sanskrit", "Sinhala", "Tamil", "Western Music"]
},

//----------------------- page9
{ 
    name: "ENGINEERING TECHNOLOGY (ET)", 
    university: "University of Colombo", 
    districtRequirements: { 'Colombo':1.7916, 'Gampaha':1.7798, 'Kalutara':1.7798, 'Matale':1.7553, 'Kandy':1.7588, 'Nuwara Eliya':1.8890, 'Galle':1.7665 ,'Matara':1.7598, 'Hambantota':1.7827, 'Jaffna':1.8646, 'Kilinochchi':1.8774, 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.7613, 'Batticaloa':1.7827, 'Ampara':"NQC", 'Puttalam':1.8230, 'Kurunegala':1.7725, 'Anuradhapura':1.7830, 'Polonnaruwa':"NQC", 'Badulla':1.7891, 'Monaragala':1.8538, 'Kegalle':1.8327, 'Ratnapura':1.8044}, 
    requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
{
    name: "ENGINEERING TECHNOLOGY (ET)", 
    university: "University of Kelaniya", 
    districtRequirements: { 'Colombo': 1.6559, 'Gampaha': 1.6534, 'Kalutara': 1.6480, 'Matale': 1.6926, 'Kandy': 1.6514, 'Nuwara Eliya': 1.7028, 'Galle': 1.6549, 'Matara': 1.6526, 'Hambantota': 1.6672, 'Jaffna': 1.6823, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.7241, 'Batticaloa': 1.6570, 'Ampara': 1.6995, 'Puttalam': 1.7054, 'Kurunegala': 1.6475, 'Anuradhapura': 1.6682, 'Polonnaruwa': 1.6681, 'Badulla': 1.6578, 'Monaragala': "NQC", 'Kegalle': 1.6593, 'Ratnapura': 1.6637 }, 
    requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},

//-----------------------  
{ 
    name: "ENGINEERING TECHNOLOGY (ET)", 
    university: "University of Jaffna", 
    districtRequirements: { 'Colombo': 1.0845, 'Gampaha': 1.0934, 'Kalutara': 1.1722, 'Matale': 1.1816, 'Kandy': 0.9870, 'Nuwara Eliya': 0.9164, 'Galle': 1.2399, 'Matara': 1.3020, 'Hambantota': 1.1762, 'Jaffna': 0.7821, 'Kilinochchi': 0.0642, 'Mannar': 0.4322, 'Mullaitivu': 0.5534, 'Vavuniya': 0.2225, 'Trincomalee': 0.5950, 'Batticaloa': 0.9831, 'Ampara': 0.7647, 'Puttalam': 0.6744, 'Kurunegala': 1.1684, 'Anuradhapura': 0.9217, 'Polonnaruwa': 0.7440, 'Badulla': 1.1227, 'Monaragala': 0.7680, 'Kegalle': 1.3712, 'Ratnapura': 1.0801 }, 
    requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},

//-----------------------        
{
     name: "ENGINEERING TECHNOLOGY (ET)", 
     university: "University of Ruhuna", 
     districtRequirements: { 'Colombo': 1.3305, 'Gampaha': 1.3324, 'Kalutara': 1.3432, 'Matale': 1.3594, 'Kandy': 1.3364, 'Nuwara Eliya': 1.3314, 'Galle': 1.3448, 'Matara': 1.3384, 'Hambantota': 1.3703, 'Jaffna': "NQC", 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': 1.4436, 'Vavuniya': "NQC", 'Trincomalee': 1.5264, 'Batticaloa': 1.6356, 'Ampara': 1.5802, 'Puttalam': 1.5422, 'Kurunegala': 1.3397, 'Anuradhapura': 1.3960, 'Polonnaruwa': 1.4564, 'Badulla': 1.3429, 'Monaragala': 1.3838, 'Kegalle': 1.3500, 'Ratnapura': 1.3427 }, 
     requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
    },

//-----------------------         
{
     name: "ENGINEERING TECHNOLOGY (ET)",
     university: "Rajarata University of Sri Lanka",
     districtRequirements: { 'Colombo': 1.0776, 'Gampaha': 1.0672, 'Kalutara': 1.0766, 'Matale': 1.2354, 'Kandy': 0.9805, 'Nuwara Eliya': 0.9125, 'Galle': 1.2663, 'Matara': 1.4843, 'Hambantota': "NQC", 'Jaffna': 1.0437, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 0.9334, 'Trincomalee': 0.9775, 'Batticaloa': 1.0002, 'Ampara': 0.9684, 'Puttalam': 0.9488, 'Kurunegala': 1.1712, 'Anuradhapura': 0.9205, 'Polonnaruwa': 0.9219, 'Badulla': 1.1501, 'Monaragala': 0.9738, 'Kegalle': 1.1298, 'Ratnapura': 1.0947 }, 
     requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
    },
//-----------------------

{
     name: "ENGINEERING TECHNOLOGY (ET)", 
     university: "Sabaragamuwa University of Sri Lanka", 
     districtRequirements: { 'Colombo': 1.1389, 'Gampaha': 1.1374, 'Kalutara': 1.1472, 'Matale': 1.2403, 'Kandy': 1.1482, 'Nuwara Eliya': 1.2403, 'Galle': 1.1767, 'Matara': 1.3418, 'Hambantota': 1.1694, 'Jaffna': "NQC", 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': 1.1804, 'Vavuniya': 1.5407, 'Trincomalee': "NQC", 'Batticaloa': 1.2859, 'Ampara': 1.1709, 'Puttalam': 1.1810, 'Kurunegala': 1.1884, 'Anuradhapura': 1.1829, 'Polonnaruwa': "NQC", 'Badulla': 1.1399, 'Monaragala': 1.1678, 'Kegalle': 1.1409, 'Ratnapura': 1.1389 }, 
     requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},

//-----------------------

{
     name: "ENGINEERING TECHNOLOGY (ET)", 
     university: "Wayamba University of Sri Lanka", 
     districtRequirements: { 'Colombo': 1.2138, 'Gampaha': 1.2094, 'Kalutara': 1.2399, 'Matale': 1.2222, 'Kandy': 1.2194, 'Nuwara Eliya': 1.2109, 'Galle': 1.2163, 'Matara': 1.3251, 'Hambantota': 1.2114, 'Jaffna': 1.2638, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.2614, 'Batticaloa': 1.2088, 'Ampara': 1.2379, 'Puttalam': 1.2221, 'Kurunegala': 1.2134, 'Anuradhapura': 1.2119, 'Polonnaruwa': 1.5420, 'Badulla': 1.2260, 'Monaragala': 1.2055, 'Kegalle': 1.2144, 'Ratnapura': 1.2139 }, 
     requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
    },

//-----------------------

{
     name: "ENGINEERING TECHNOLOGY (ET)", 
     university: "Uva Wellassa University of Sri Lanka", 
     districtRequirements: { 'Colombo': 1.0934, 'Gampaha': 1.0757, 'Kalutara': 1.0733, 'Matale': 1.1874, 'Kandy': 1.0243, 'Nuwara Eliya': 1.0223, 'Galle': 1.1782, 'Matara': 1.3046, 'Hambantota': 1.2055, 'Jaffna': 1.0287, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 1.0215, 'Trincomalee': 1.1551, 'Batticaloa': 1.0721, 'Ampara': 0.9938, 'Puttalam': 1.0835, 'Kurunegala': 1.2148, 'Anuradhapura': 1.0047, 'Polonnaruwa': 1.0262, 'Badulla': 1.0948, 'Monaragala': 0.9880, 'Kegalle': 1.1452, 'Ratnapura': 1.1187 }, 
     requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},

//---------------------- 
{
    name: "BIOSYSTEMS TECHNOLOGY (BST)", 
    university: "University of Colombo", 
    districtRequirements: { 'Colombo': 1.7011, 'Gampaha': 1.6256, 'Kalutara': 1.6699, 'Matale': 1.6552, 'Kandy': 1.6894, 'Nuwara Eliya': 1.6240, 'Galle': 1.6564, 'Matara': 1.6347, 'Hambantota': 1.6236, 'Jaffna': 1.8488, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': 1.6709, 'Vavuniya': "NQC", 'Trincomalee': 1.6355, 'Batticaloa': 1.7305, 'Ampara': 1.7506, 'Puttalam': 1.6433, 'Kurunegala': 1.6345, 'Anuradhapura': 1.6543, 'Polonnaruwa': "NQC", 'Badulla': 1.6552, 'Monaragala': 2.2985, 'Kegalle': 1.6243, 'Ratnapura': 1.6512 },
    requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//----------------------       

{   name: "BIOSYSTEMS TECHNOLOGY (BST)", 
    university: "University of Sri Jayewardenepura", 
    districtRequirements: { 'Colombo': 1.9350, 'Gampaha': 1.8915, 'Kalutara': 1.8943, 'Matale': 2.0212, 'Kandy': 1.9352, 'Nuwara Eliya': 2.0122, 'Galle': 1.9062, 'Matara': 1.9476, 'Hambantota': 1.9303, 'Jaffna': 2.0881, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 2.0765, 'Batticaloa': 1.8957, 'Ampara': 1.9967, 'Puttalam': 2.8457, 'Kurunegala': 2.0403, 'Anuradhapura': 1.9157, 'Polonnaruwa': 1.9195, 'Badulla': 1.9126, 'Monaragala': 2.0695, 'Kegalle': 1.9288, 'Ratnapura': 1.9088 }, 
    requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
   
{   
     name: "BIOSYSTEMS TECHNOLOGY (BST)", 
     university: "University of Jaffna", 
     districtRequirements: { 'Colombo': 0.8181, 'Gampaha': 0.8056, 'Kalutara': 0.8846, 'Matale': 1.1028, 'Kandy': 0.9489, 'Nuwara Eliya': 0.8727, 'Galle': 1.0020, 'Matara': "NQC", 'Hambantota': 1.0592, 'Jaffna': 0.8051, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 0.8241, 'Trincomalee': 0.9341, 'Batticaloa': 0.8730, 'Ampara': 0.9533, 'Puttalam': 0.8061, 'Kurunegala': 1.0150, 'Anuradhapura': 0.9981, 'Polonnaruwa': 0.8136, 'Badulla': 1.1218, 'Monaragala': 0.9894, 'Kegalle': "NQC", 'Ratnapura': 0.9367 }, 
     requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},

//---------------------- 
       
{ 
     name: "BIOSYSTEMS TECHNOLOGY (BST)", 
     university: "University of Ruhuna", 
     districtRequirements: { 'Colombo': 1.4331, 'Gampaha': 1.4198, 'Kalutara': 1.4293, 'Matale': "NQC", 'Kandy': 1.4457, 'Nuwara Eliya': 1.4823, 'Galle': 1.4506, 'Matara': 1.4648, 'Hambantota': 1.5426, 'Jaffna': "NQC", 'Kilinochchi': "NQC", 'Mannar': 1.4963, 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.5564, 'Batticaloa': "NQC", 'Ampara': 1.4465, 'Puttalam': "NQC", 'Kurunegala': 1.4225, 'Anuradhapura': 1.4193, 'Polonnaruwa': "NQC", 'Badulla': 1.4861, 'Monaragala': 1.4434, 'Kegalle': 1.4191, 'Ratnapura': 1.4192 }, 
     requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
    },
//---------------------- 
       
{ 
    name: "BIOSYSTEMS TECHNOLOGY (BST)", 
    university: "Eastern University, Sri Lanka", 
    districtRequirements: { 'Colombo': 0.4505, 'Gampaha': 0.6740, 'Kalutara': 0.9300, 'Matale': "NQC", 'Kandy': 1.0142, 'Nuwara Eliya': 0.8509, 'Galle': 0.7175, 'Matara': "NQC", 'Hambantota': 1.0748, 'Jaffna': 0.4389, 'Kilinochchi': 0.0815, 'Mannar': 0.6483, 'Mullaitivu': 0.1977, 'Vavuniya': 0.5622, 'Trincomalee': 0.6076, 'Batticaloa': 0.9926, 'Ampara': 1.3297, 'Puttalam': 0.7654, 'Kurunegala': 1.0276, 'Anuradhapura': 1.0094, 'Polonnaruwa': 0.7598, 'Badulla': 1.1276, 'Monaragala': 0.8823, 'Kegalle': "NQC", 'Ratnapura': 0.9579 }, 
    requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
    name: "BIOSYSTEMS TECHNOLOGY (BST)", 
    university: "South Eastern University of Sri Lanka", 
    districtRequirements: { 'Colombo': 0.4282, 'Gampaha': 0.6711, 'Kalutara': 0.9123, 'Matale': "NQC", 'Kandy': 0.9851, 'Nuwara Eliya': 0.8014, 'Galle': 0.6873, 'Matara': "NQC", 'Hambantota': "NQC", 'Jaffna': 0.4207, 'Kilinochchi': 0.5054, 'Mannar': 0.6748, 'Mullaitivu': "NQC", 'Vavuniya': 0.4994, 'Trincomalee': 0.6722, 'Batticaloa': 1.1852, 'Ampara': 0.9778, 'Puttalam': 0.8261, 'Kurunegala': 1.0485, 'Anuradhapura': "NQC", 'Polonnaruwa': 0.6787, 'Badulla': 1.1268, 'Monaragala': 0.9414, 'Kegalle': "NQC", 'Ratnapura': 0.9593 }, 
    requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
     name: "BIOSYSTEMS TECHNOLOGY (BST)", 
     university: "Rajarata University of Sri Lanka", 
     districtRequirements: { 'Colombo': 1.1045, 'Gampaha': 1.1069, 'Kalutara': 1.1074, 'Matale': 1.1011, 'Kandy': 1.1036, 'Nuwara Eliya': 1.2979, 'Galle': 1.1071, 'Matara': 1.3619, 'Hambantota': 1.1025, 'Jaffna': 1.3054, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.2816, 'Batticaloa': 1.1164, 'Ampara': "NQC", 'Puttalam': 1.1188, 'Kurunegala': 1.1157, 'Anuradhapura': 1.1094, 'Polonnaruwa': "NQC", 'Badulla': 1.1227, 'Monaragala': 1.1224, 'Kegalle': 1.1227, 'Ratnapura': 1.1143 }, 
     requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
    },

//---------------------- 
       
{ 
     name: "BIOSYSTEMS TECHNOLOGY (BST)", 
     university: "Sabaragamuwa University of Sri Lanka", 
     districtRequirements: { 'Colombo': 1.2020, 'Gampaha': 1.2185, 'Kalutara': 1.2119, 'Matale': 1.3209, 'Kandy': 1.1942, 'Nuwara Eliya': 1.1940, 'Galle': 1.2103, 'Matara': 1.1956, 'Hambantota': 1.1885, 'Jaffna': "NQC", 'Kilinochchi': "NQC", 'Mannar': 1.2247, 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.6174, 'Batticaloa': 1.2470, 'Ampara': 1.1945, 'Puttalam': 1.1883, 'Kurunegala': 1.1997, 'Anuradhapura': 1.3367, 'Polonnaruwa': 1.1894, 'Badulla': 1.2130, 'Monaragala': 1.1895, 'Kegalle': 1.2063, 'Ratnapura': 1.1895 }, 
     requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
    },

//---------------------- 
       
{ 
     name: "BIOSYSTEMS TECHNOLOGY (BST)", 
     university: "Wayamba University of Sri Lanka", 
     districtRequirements: { 'Colombo': 1.3115, 'Gampaha': 1.2845, 'Kalutara': 1.3059, 'Matale': 1.3021, 'Kandy': 1.3500, 'Nuwara Eliya': 1.5024, 'Galle': 1.3731, 'Matara': 1.2998, 'Hambantota': 1.2959, 'Jaffna': "NQC", 'Kilinochchi': 1.3952, 'Mannar': 1.3073, 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.4643, 'Batticaloa': 1.4707, 'Ampara': 1.3013, 'Puttalam': 1.2947, 'Kurunegala': 1.3399, 'Anuradhapura': 1.2827, 'Polonnaruwa': 1.5222, 'Badulla': 1.2904, 'Monaragala': 1.2984, 'Kegalle': 1.3118, 'Ratnapura': 1.3437 }, 
     requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
    },

//---------------------- 
       
{ 
     name: "BIOSYSTEMS TECHNOLOGY (BST)", 
     university: "Uva Wellassa University of Sri Lanka", 
     districtRequirements: { 'Colombo': 1.1466, 'Gampaha': 1.1423, 'Kalutara': 1.1392, 'Matale': 1.4005, 'Kandy': 1.1435, 'Nuwara Eliya': 1.1323, 'Galle': 1.2831, 'Matara': 1.1920, 'Hambantota': 1.1367, 'Jaffna': 1.4436, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 1.1446, 'Trincomalee': "NQC", 'Batticaloa': 1.1487, 'Ampara': 1.1408, 'Puttalam': "NQC", 'Kurunegala': 1.1463, 'Anuradhapura': 1.1522, 'Polonnaruwa': 1.2411, 'Badulla': 1.1403, 'Monaragala': 1.1313, 'Kegalle': 1.1638, 'Ratnapura': 1.1338 }, 
     requiredSubjects: ["Science for Technology","Bio Systems Technology ","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
     name: "INFORMATION COMMUNICATION TECHNOLOGY", 
     university: "University of Colombo", 
     districtRequirements: { 'Colombo': 2.0302, 'Gampaha': 2.0519, 'Kalutara': 2.0287, 'Matale': 2.0708, 'Kandy': 2.0953, 'Nuwara Eliya': 2.0682, 'Galle': 2.0443, 'Matara': 2.0278, 'Hambantota': 2.0748, 'Jaffna': 2.0449, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 2.1626, 'Batticaloa': 2.2895, 'Ampara': 2.0736, 'Puttalam': 2.2166, 'Kurunegala': 2.0660, 'Anuradhapura': 2.0410, 'Polonnaruwa': 2.0605, 'Badulla': 2.0492, 'Monaragala': 2.0420, 'Kegalle': "NQC", 'Ratnapura': 2.0827 }, 
     requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
    name: "INFORMATION COMMUNICATION TECHNOLOGY", 
    university: "University of Sri Jayewardenepura", 
    districtRequirements: { 'Colombo': 2.2594, 'Gampaha': 2.2575, 'Kalutara': 2.2523, 'Matale': 2.2375, 'Kandy': 2.2748, 'Nuwara Eliya': 2.2490, 'Galle': 2.2330, 'Matara': 2.2341, 'Hambantota': 2.3179, 'Jaffna': 2.2743, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 2.2778, 'Batticaloa': 2.2707, 'Ampara': 2.4197, 'Puttalam': 2.2483, 'Kurunegala': 2.3076, 'Anuradhapura': 2.3644, 'Polonnaruwa': 3.1166, 'Badulla': 2.2533, 'Monaragala': 2.2375, 'Kegalle': 2.2542, 'Ratnapura': 2.3350 }, 
    requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
     name: "INFORMATION COMMUNICATION TECHNOLOGY", 
     university: "University of Kelaniya", 
     districtRequirements: { 'Colombo': 1.9023, 'Gampaha': 1.9146, 'Kalutara': 1.9073, 'Matale': 1.9106, 'Kandy': 1.9205, 'Nuwara Eliya': 2.0037, 'Galle': 1.9038, 'Matara': 1.9567, 'Hambantota': 1.9451, 'Jaffna': 1.9039, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.9857, 'Batticaloa': 1.9048, 'Ampara': 2.0068, 'Puttalam': 1.9019, 'Kurunegala': 1.9087, 'Anuradhapura': 1.9023, 'Polonnaruwa': 1.9857, 'Badulla': 1.9184, 'Monaragala': 1.9940, 'Kegalle': 1.9378, 'Ratnapura': 1.9812 }, 
     requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
    name: "INFORMATION COMMUNICATION TECHNOLOGY", 
    university: "University of Ruhuna", 
    districtRequirements: { 'Colombo': 1.6931, 'Gampaha': 1.6873, 'Kalutara': 1.6794, 'Matale': 1.6922, 'Kandy': 1.7525, 'Nuwara Eliya': 1.7607, 'Galle': 1.6740, 'Matara': 1.6745, 'Hambantota': 1.6927, 'Jaffna': "NQC", 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.6993, 'Batticaloa': 1.8338, 'Ampara': "NQC", 'Puttalam': 1.7529, 'Kurunegala': 1.6760, 'Anuradhapura': "NQC", 'Polonnaruwa': 1.6766, 'Badulla': "NQC", 'Monaragala': 1.7883, 'Kegalle': 1.6966, 'Ratnapura': 1.6966 }, 
    requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
     name: "INFORMATION COMMUNICATION TECHNOLOGY",
     university: "South Eastern University of Sri Lanka", 
     districtRequirements: { 'Colombo': 1.0585, 'Gampaha': 1.1511, 'Kalutara': 1.2266, 'Matale': 1.3633, 'Kandy': 1.0538, 'Nuwara Eliya': 1.1672, 'Galle': 1.4967, 'Matara': "NQC", 'Hambantota': 1.3243, 'Jaffna': 1.0821, 'Kilinochchi': 1.0748, 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': 1.2590, 'Trincomalee': 1.6671, 'Batticaloa': "NQC", 'Ampara': 1.0832, 'Puttalam': 1.0772, 'Kurunegala': 1.3026, 'Anuradhapura': 1.1131, 'Polonnaruwa': 1.1115, 'Badulla': 1.1762, 'Monaragala': 1.1086, 'Kegalle': 1.2169, 'Ratnapura': 1.0523 }, 
     requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
    name: "INFORMATION COMMUNICATION TECHNOLOGY", 
    university: "Rajarata University of Sri Lanka", 
    districtRequirements: { 'Colombo': 1.4153, 'Gampaha': 1.3908, 'Kalutara': 1.3820, 'Matale': 1.3976, 'Kandy': 1.4247, 'Nuwara Eliya': 1.3969, 'Galle': 1.4452, 'Matara': 1.5320, 'Hambantota': 1.3884, 'Jaffna': 1.3859, 'Kilinochchi': 1.5104, 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.3815, 'Batticaloa': 1.3810, 'Ampara': 1.3821, 'Puttalam': 1.3785, 'Kurunegala': 1.4027, 'Anuradhapura': "NQC", 'Polonnaruwa': 1.3785, 'Badulla': 1.5211, 'Monaragala': 1.3879, 'Kegalle': 1.4266, 'Ratnapura': 1.4266 }, 
    requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
    name: "INFORMATION COMMUNICATION TECHNOLOGY", 
    university: "University of Vavuniya, Sri Lanka", 
    districtRequirements: { 'Colombo': 0.9974, 'Gampaha': 1.0193, 'Kalutara': 1.4977, 'Matale': "NQC", 'Kandy': 0.9404, 'Nuwara Eliya': 0.8619, 'Galle': "NQC", 'Matara': "NQC", 'Hambantota': 1.3141, 'Jaffna': 0.8547, 'Kilinochchi': 0.8913, 'Mannar': 0.5081, 'Mullaitivu': 0.2412, 'Vavuniya': 0.1369, 'Trincomalee': 0.7518, 'Batticaloa': 1.3603, 'Ampara': 0.8812, 'Puttalam': 0.8199, 'Kurunegala': 1.3026, 'Anuradhapura': 1.0335, 'Polonnaruwa': 0.6690, 'Badulla': 1.2276, 'Monaragala': 0.7886, 'Kegalle': 1.2555, 'Ratnapura': 1.0482 }, 
    requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
    name: "INFORMATION COMMUNICATION TECHNOLOGY", 
    university: "Uva Wellassa University of Sri Lanka", 
    districtRequirements: { 'Colombo': 1.5338, 'Gampaha': 1.5746, 'Kalutara': 1.5374, 'Matale': 1.5794, 'Kandy': 1.5392, 'Nuwara Eliya': 1.6373, 'Galle': 1.5480, 'Matara': 1.5540, 'Hambantota': 1.5584, 'Jaffna': 1.8565, 'Kilinochchi': "NQC", 'Mannar': "NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee': 1.7729, 'Batticaloa': 1.5967, 'Ampara': 1.6034, 'Puttalam': 1.6217, 'Kurunegala': 1.5324, 'Anuradhapura': 1.5535, 'Polonnaruwa': 1.8568, 'Badulla': 1.5882, 'Monaragala': 1.5603, 'Kegalle': 1.5584, 'Ratnapura': 1.5407 }, 
    requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
},
//---------------------- 
       
{ 
name: "PHYSICAL SCIENCE-ICT ", 
university: "University of Sri Jayewardenepura)", 
districtRequirements: { 'Colombo':0.9679, 'Gampaha':0.9607, 'Kalutara': 0.9734, 'Matale': 1.2561, 'Kandy': 1.0196, 'Nuwara Eliya': "NQC", 'Galle': 0.9758, 'Matara':0.9772, 'Hambantota': 0.9620, 'Jaffna': 0.9819, 'Kilinochchi': "NQC", 'Mannar':"NQC", 'Mullaitivu': "NQC", 'Vavuniya': "NQC", 'Trincomalee':"NQC", 'Batticaloa': 0.9607, 'Ampara': "NQC", 'Puttalam':1.3494, 'Kurunegala':0.9763, 'Anuradhapura': 0.9904, 'Polonnaruwa': "NQC", 'Badulla': "NQC", 'Monaragala': "NQC", 'Kegalle': 1.0390, 'Ratnapura': 0.9947 }, 
requiredSubjects: ["Combined Mathematics","Physics","Information & Communication Technology"]
},

//----------------------- page10
{ 
    name: "PHYSICAL SCIENCE - ICT", 
    university: "University of Kelaniya", 
    districtRequirements: { 'Colombo':0.8942, 'Gampaha':0.8843, 'Kalutara':0.9089, 'Matale':0.4549, 'Kandy':0.6295, 'Nuwara Eliya':0.4319, 'Galle':0.9235, 'Matara':1.3015, 'Hambantota':0.7725, 'Jaffna':0.9422, 'Kilinochchi':-0.0832, 'Mannar':"NQC", 'Mullaitivu':-0.2476, 'Vavuniya':0.4188, 'Trincomalee':0.5883, 'Batticaloa':0.5258, 'Ampara':-0.0818, 'Puttalam':0.1980, 'Kurunegala':0.8810, 'Anuradhapura':0.6726, 'Polonnaruwa':0.2815, 'Badulla':0.5365, 'Monaragala':0.8387, 'Kegalle':0.7501, 'Ratnapura':0.6155}, 
    requiredSubjects: ["Physics","Combined Mathematics","Information & Communication Technology"] 
},

{ 
    name: "TRANSLATION STUDIES", 
    university: "University of Kelaniya", 
    districtRequirements: { 'Colombo':1.3257, 'Gampaha':1.3795, 'Kalutara':1.2803, 'Matale':1.3401, 'Kandy':1.2902, 'Nuwara Eliya':"NQC", 'Galle':1.3169, 'Matara':1.3136, 'Hambantota':1.2827, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':"NQC", 'Kurunegala':"NQC", 'Anuradhapura':1.3924, 'Polonnaruwa':"NQC", 'Badulla':1.3606, 'Monaragala':"NQC", 'Kegalle':"NQC", 'Ratnapura':"NQC"}, 
    requiredSubjects: ["Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","Chinese","Chemistry","Christian Civilization","Christianity","Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French" , "Food Technology","Geography","German","Greek and Roman Civilization","Hindi","Hindu Civilization","Hinduism","History of India","History of Europe","History of Morden World","Home Economics","Higher Mathematics","Islam","slam Civilization","Information & Communication Technology","Japanese","Korean","Logic and Scientific Method","Mathematics","Mechanical Technology","Malay","Oriental Music","Pali","Physics","Political Science","Russian","Science for Technology","Sanskrit","Sinhala"] 
},

{ 
    name: "TRANSLATION STUDIES", 
    university: "University of Jaffna", 
    districtRequirements: { 'Colombo':0.3594, 'Gampaha':"NQC", 'Kalutara':0.5809, 'Matale':"NQC", 'Kandy':0.6802, 'Nuwara Eliya':0.7378, 'Galle':"NQC", 'Matara':0.2825, 'Hambantota':"NQC", 'Jaffna':0.9260, 'Kilinochchi':0.6382, 'Mannar':0.8658, 'Mullaitivu':0.9694, 'Vavuniya':0.9181, 'Trincomalee':0.1045, 'Batticaloa':0.9021, 'Ampara':0.5429, 'Puttalam':0.8910, 'Kurunegala':0.3170, 'Anuradhapura':-0.3788, 'Polonnaruwa':"NQC", 'Badulla':0.3080, 'Monaragala':"NQC", 'Kegalle':0.6421, 'Ratnapura':0.5192}, 
    requiredSubjects: ["Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","Chinese","Chemistry","Christian Civilization","Christianity","Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French" , "Food Technology","Geography","German","Greek and Roman Civilization","Hindi","Hindu Civilization","Hinduism","History of India","History of Europe","History of Morden World","Home Economics","Higher Mathematics","Islam","slam Civilization","Information & Communication Technology","Japanese","Korean","Logic and Scientific Method","Mathematics","Mechanical Technology","Malay","Oriental Music","Pali","Physics","Political Science","Russian","Science for Technology","Sanskrit","Sinhala"] 
},

{ 
    name: "TRANSLATION STUDIES", 
    university: "Eastern University of Sri Lanka", 
    districtRequirements: { 'Colombo':0.6717, 'Gampaha':0.9240, 'Kalutara':0.7276, 'Matale':0.6232, 'Kandy':0.7095, 'Nuwara Eliya':1.3782, 'Galle':0.8917, 'Matara':"NQC", 'Hambantota':"NQC", 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':0.7570, 'Batticaloa':0.8875, 'Ampara':0.5850, 'Puttalam':1.2304, 'Kurunegala':0.7734, 'Anuradhapura':0.6794, 'Polonnaruwa':"NQC", 'Badulla':1.2677, 'Monaragala':"NQC", 'Kegalle':0.6656, 'Ratnapura':"NQC"}, 
    requiredSubjects: ["Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","Chinese","Chemistry","Christian Civilization","Christianity","Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French" , "Food Technology","Geography","German","Greek and Roman Civilization","Hindi","Hindu Civilization","Hinduism","History of India","History of Europe","History of Morden World","Home Economics","Higher Mathematics","Islam","slam Civilization","Information & Communication Technology","Japanese","Korean","Logic and Scientific Method","Mathematics","Mechanical Technology","Malay","Oriental Music","Pali","Physics","Political Science","Russian","Science for Technology","Sanskrit","Sinhala"] 
},

{ 
    name: "TRANSLATION STUDIES", 
    university: "Sabaragamuwa University of Sri Lanka", 
    districtRequirements: { 'Colombo':1.1138, 'Gampaha':0.8462, 'Kalutara':1.0886, 'Matale':0.9007, 'Kandy':0.9852, 'Nuwara Eliya':"NQC", 'Galle':1.1879, 'Matara':1.1603, 'Hambantota':1.0815, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':"NQC", 'Puttalam':0.7059, 'Kurunegala':0.6582, 'Anuradhapura':1.0974, 'Polonnaruwa':0.9177, 'Badulla':1.0347, 'Monaragala':"NQC", 'Kegalle':0.9974, 'Ratnapura':1.0633}, 
    requiredSubjects: ["Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","Chinese","Chemistry","Christian Civilization","Christianity","Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French" , "Food Technology","Geography","German","Greek and Roman Civilization","Hindi","Hindu Civilization","Hinduism","History of India","History of Europe","History of Morden World","Home Economics","Higher Mathematics","Islam","slam Civilization","Information & Communication Technology","Japanese","Korean","Logic and Scientific Method","Mathematics","Mechanical Technology","Malay","Oriental Music","Pali","Physics","Political Science","Russian","Science for Technology","Sanskrit","Sinhala"] 
},

{ 
    name: "FILM & TELEVISION STUDIES", 
    university: "University of Kelaniya", 
    districtRequirements: { 'Colombo':1.0316, 'Gampaha':0.8714, 'Kalutara':1.0585, 'Matale':"NQC", 'Kandy':0.7936, 'Nuwara Eliya':0.5150, 'Galle':1.1485, 'Matara':1.1187, 'Hambantota':1.1990, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':0.7682, 'Puttalam':0.6505, 'Kurunegala':1.0974, 'Anuradhapura':0.9846, 'Polonnaruwa':1.4126, 'Badulla':1.1250, 'Monaragala':1.0550, 'Kegalle':1.2090, 'Ratnapura':1.0389}, 
    requiredSubjects: ["Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","Chinese","Chemistry","Christian Civilization","Christianity","Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French" , "Food Technology","Geography","German","Greek and Roman Civilization","Hindi","Hindu Civilization","Hinduism","History of India","History of Europe","History of Morden World","Home Economics","Higher Mathematics","Islam","slam Civilization","Information & Communication Technology","Japanese","Korean","Logic and Scientific Method","Mathematics","Mechanical Technology","Malay","Oriental Music","Pali","Physics","Political Science","Russian","Science for Technology","Sanskrit","Sinhala"] 
},

{ 
    name: "PROJECT MANAGEMENT", 
    university: "University of Vavuniya, Sri Lanka", 
    districtRequirements: { 'Colombo':1.3184, 'Gampaha':1.3040, 'Kalutara':1.3114, 'Matale':1.4221, 'Kandy':1.3343, 'Nuwara Eliya':1.3940, 'Galle':1.3229, 'Matara':1.3183, 'Hambantota':1.3170, 'Jaffna':1.4395, 'Kilinochchi':1.2347, 'Mannar':1.2516, 'Mullaitivu':1.1682, 'Vavuniya':1.4837, 'Trincomalee':1.4830, 'Batticaloa':1.4334, 'Ampara':1.4135, 'Puttalam':1.4858, 'Kurunegala':1.4250, 'Anuradhapura':1.3737, 'Polonnaruwa':1.4168, 'Badulla':1.3095, 'Monaragala':1.4320, 'Kegalle':1.4662, 'Ratnapura':1.3480}, 
    requiredSubjects: ["Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","Chinese","Chemistry","Christian Civilization","Christianity","Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French" , "Food Technology","Geography","German","Greek and Roman Civilization","Hindi","Hindu Civilization","Hinduism","History of India","History of Europe","History of Morden World","Home Economics","Higher Mathematics","Islam","slam Civilization","Information & Communication Technology","Japanese","Korean","Logic and Scientific Method","Mathematics","Mechanical Technology","Malay","Oriental Music","Pali","Physics","Political Science","Russian","Science for Technology","Sanskrit","Sinhala"] 
},

{ 
    name: "TEACHING ENGLISH AS A SECOND LANGUAGE (TESL)", 
    university: "University of Sri Jayewardenepura", 
    districtRequirements: { 'Colombo':1.0633, 'Gampaha':1.0633, 'Kalutara':1.0633, 'Matale':1.0633, 'Kandy':1.0633, 'Nuwara Eliya':1.0633, 'Galle':1.0633, 'Matara':1.0633, 'Hambantota':1.0633, 'Jaffna':1.0633, 'Kilinochchi':1.0633, 'Mannar':1.0633, 'Mullaitivu':1.0633, 'Vavuniya':1.0633, 'Trincomalee':1.0633, 'Batticaloa':1.0633, 'Ampara':1.0633, 'Puttalam':1.0633, 'Kurunegala':1.0633, 'Anuradhapura':1.0633, 'Polonnaruwa':1.0633, 'Badulla':1.0633, 'Monaragala':1.0633, 'Kegalle':1.0633, 'Ratnapura':1.0633}, 
    requiredSubjects: ["Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","Chinese","Chemistry","Christian Civilization","Christianity","Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French" , "Food Technology","Geography","German","Greek and Roman Civilization","Hindi","Hindu Civilization","Hinduism","History of India","History of Europe","History of Morden World","Home Economics","Higher Mathematics","Islam","slam Civilization","Information & Communication Technology","Japanese","Korean","Logic and Scientific Method","Mathematics","Mechanical Technology","Malay","Oriental Music","Pali","Physics","Political Science","Russian","Science for Technology","Sanskrit","Sinhala"] 
},

{ 
    name: "TEACHING ENGLISH AS A SECOND LANGUAGE (TESL)", 
    university: "University of Kelaniya", 
    districtRequirements: { 'Colombo':1.0999, 'Gampaha':1.0999, 'Kalutara':1.0999, 'Matale':1.0999, 'Kandy':1.0999, 'Nuwara Eliya':1.0999, 'Galle':1.0999, 'Matara':1.0999, 'Hambantota':1.0999, 'Jaffna':1.0999, 'Kilinochchi':1.0999, 'Mannar':1.0999, 'Mullaitivu':1.0999, 'Vavuniya':1.0999, 'Trincomalee':1.0999, 'Batticaloa':1.0999, 'Ampara':1.0999, 'Puttalam':1.0999, 'Kurunegala':1.0999, 'Anuradhapura':1.0999, 'Polonnaruwa':1.0999, 'Badulla':1.0999, 'Monaragala':1.0999, 'Kegalle':1.0999, 'Ratnapura':1.0999}, 
     requiredSubjects: ["Accounting","Agricultural Science","Agro Technology","Art","Arabic","Biology","Bio-Resource Technology","Bio System Technology","Business Statistics","Business Studies","Buddhism","Buddhist Civilization","Carnatic Music","Chinese","Chemistry","Christian Civilization","Christianity","Civil Technology","Communication & Media Studies","Combined Mathematics","Dancing (Indigeneous)","Dancing (Bharata)","Drama and Theatre (Sinhala)","Drama and Theatre (Tamil)","Drama and Theatre (English)","Economics","Electrical,Electronic and Information Technology","Engineering Technology","English","French" , "Food Technology","Geography","German","Greek and Roman Civilization","Hindi","Hindu Civilization","Hinduism","History of India","History of Europe","History of Morden World","Home Economics","Higher Mathematics","Islam","slam Civilization","Information & Communication Technology","Japanese","Korean","Logic and Scientific Method","Mathematics","Mechanical Technology","Malay","Oriental Music","Pali","Physics","Political Science","Russian","Science for Technology","Sanskrit","Sinhala"] 
},
{ 
    name: "VISUAL ARTS", 
    university: "University of the Visual & Performing Arts", 
    districtRequirements: { 'Colombo':0.8758, 'Gampaha':0.6020, 'Kalutara':0.9569, 'Matale':1.2767, 'Kandy':0.9707, 'Nuwara Eliya':0.7268, 'Galle':0.1914, 'Matara':1.2467, 'Hambantota':1.1013, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.1231, 'Batticaloa':"NQC", 'Ampara':0.4630, 'Puttalam':0.6723, 'Kurunegala':1.0532, 'Anuradhapura':0.9405, 'Polonnaruwa':1.0939, 'Badulla':0.5424, 'Monaragala':1.1041, 'Kegalle':1.0478, 'Ratnapura':0.9832}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "MUSIC", 
    university: "University of Sri Jayewardenepura", 
    districtRequirements: { 'Colombo':0.7807, 'Gampaha':-0.0905, 'Kalutara':0.3424, 'Matale':0.5595, 'Kandy':0.0659, 'Nuwara Eliya':0.6688, 'Galle':1.7660, 'Matara':0.8580, 'Hambantota':0.9397, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':"NQC", 'Batticaloa':"NQC", 'Ampara':1.218, 'Puttalam':"NQC", 'Kurunegala':0.9007, 'Anuradhapura':0.9304, 'Polonnaruwa':0.5276, 'Badulla':1.0123, 'Monaragala':0.5185, 'Kegalle':0.8921, 'Ratnapura':0.7336}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "MUSIC", 
    university: "University of the Visual & Performing Arts", 
    districtRequirements: { 'Colombo':0.2977, 'Gampaha':0.2155, 'Kalutara':0.5951, 'Matale':0.9793, 'Kandy':0.8065, 'Nuwara Eliya':0.3023, 'Galle':0.9002, 'Matara':0.8851, 'Hambantota':0.4056, 'Jaffna':-0.2374, 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.4451, 'Trincomalee':0.6958, 'Batticaloa':-0.2295, 'Ampara':0.3449, 'Puttalam':0.4423, 'Kurunegala':0.8633, 'Anuradhapura':0.8027, 'Polonnaruwa':0.8736, 'Badulla':0.7726, 'Monaragala':0.7726, 'Kegalle':0.9599, 'Ratnapura':0.8004}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "DANCE", 
    university: "University of the Visual & Performing Arts", 
    districtRequirements: { 'Colombo':0.7756, 'Gampaha':0.8958, 'Kalutara':0.9194, 'Matale':0.9385, 'Kandy':0.9312, 'Nuwara Eliya':-0.1693, 'Galle':1.0293, 'Matara':1.0088, 'Hambantota':0.6664, 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':1.1050, 'Trincomalee':0.8009, 'Batticaloa':"'NQC", 'Ampara':0.6324, 'Puttalam':0.0388, 'Kurunegala':0.9299, 'Anuradhapura':0.9710, 'Polonnaruwa':0.7846, 'Badulla':0.6111, 'Monaragala':0.9871, 'Kegalle':1.0320, 'Ratnapura':0.6529}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "DRAMA & THEATR", 
    university: "University of the Visual & Performing Arts", 
    districtRequirements: { 'Colombo':0.9184, 'Gampaha':0.7873, 'Kalutara':0.4765, 'Matale':1.0223, 'Kandy':0.5006, 'Nuwara Eliya':0.3940, 'Galle':0.3861, 'Matara':0.9872, 'Hambantota':"NQC", 'Jaffna':"NQC", 'Kilinochchi':"NQC", 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':0.7855, 'Batticaloa':"'NQC", 'Ampara':0.4125, 'Puttalam':0.9381, 'Kurunegala':1.0478, 'Anuradhapura':0.9686, 'Polonnaruwa':0.8736, 'Badulla':1.0374, 'Monaragala':1.0565, 'Kegalle':1.0519, 'Ratnapura':0.7332}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "ART & DESIGN", 
    university: "University of Jaffna", 
    districtRequirements: { 'Colombo':"NQC", 'Gampaha':1.2643, 'Kalutara':"NQC", 'Matale':0.5481, 'Kandy':"NQC", 'Nuwara Eliya':-0.2382, 'Galle':1.3809, 'Matara':0.7901, 'Hambantota':"NQC", 'Jaffna':0.3750, 'Kilinochchi':-0.0806, 'Mannar':0.7050, 'Mullaitivu':0.5589, 'Vavuniya':0.9317, 'Trincomalee':0.3538, 'Batticaloa':-0.2254, 'Ampara':0.3170, 'Puttalam':0.4301, 'Kurunegala':"NQC", 'Anuradhapura':-0.0400, 'Polonnaruwa':"NQC", 'Badulla':0.0831, 'Monaragala':0.2499, 'Kegalle':0.2188, 'Ratnapura':0.4776}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "MUSIC*#", 
    university: "University of Jaffna", 
    districtRequirements: { 'Colombo':0.0672, 'Gampaha':"NQC", 'Kalutara':0.4778, 'Matale':0.2740, 'Kandy':0.1218, 'Nuwara Eliya':0.4185, 'Galle':"NQC", 'Matara':-0.0609, 'Hambantota':"NQC", 'Jaffna':0.5709, 'Kilinochchi':0.3848, 'Mannar':0.5690, 'Mullaitivu':0.6667, 'Vavuniya':0.4882, 'Trincomalee':-0.2208, 'Batticaloa':0.5115, 'Ampara':-0.8079, 'Puttalam':0.7703, 'Kurunegala':"NQC", 'Anuradhapura':"NQC", 'Polonnaruwa':"NQC", 'Badulla':-0.3555, 'Monaragala':0.4180, 'Kegalle':0.8706, 'Ratnapura':"NQC"}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "DANCE*#", 
    university: "University of Jaffna*#", 
    districtRequirements: { 'Colombo':0.0655, 'Gampaha':-0.4526, 'Kalutara':-0.5592, 'Matale':0.4399, 'Kandy':-0.0591, 'Nuwara Eliya':0.1365, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':"NQC", 'Jaffna':0.4859, 'Kilinochchi':0.3409, 'Mannar':0.1749, 'Mullaitivu':0.4024, 'Vavuniya':0.4496, 'Trincomalee':-0.0199, 'Batticaloa':0.4023, 'Ampara':-0.2764, 'Puttalam':-0.4137, 'Kurunegala':"NQC", 'Anuradhapura':"NQC", 'Polonnaruwa':"NQC", 'Badulla':0.2607, 'Monaragala':"NQC", 'Kegalle':0.9244, 'Ratnapura':-0.1878}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "VISUAL & TECHNOLOGICAL ARTS*#", 
    university: "Swami Vipulananda Institute of Aesthetic Studies", 
    districtRequirements: { 'Colombo':"NQC", 'Gampaha':"NQC", 'Kalutara':-0.4372, 'Matale':0.4670, 'Kandy':-0.0373, 'Nuwara Eliya':0.2056, 'Galle':"NQC", 'Matara':-0.1418, 'Hambantota':-0.0806, 'Jaffna':0.2134, 'Kilinochchi':0.9594, 'Mannar':0.4944, 'Mullaitivu':0.4468, 'Vavuniya':"NQC", 'Trincomalee':0.3400, 'Batticaloa':0.6957, 'Ampara':0.5714, 'Puttalam':0.2398, 'Kurunegala':0.3450, 'Anuradhapura':0.1912, 'Polonnaruwa':-0.2883, 'Badulla':0.1355, 'Monaragala':0.0474, 'Kegalle':-0.5133, 'Ratnapura':0.1522}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "MUSIC*#", 
    university: "Swami Vipulananda Institute of Aesthetic Studies", 
    districtRequirements: { 'Colombo':"NQC", 'Gampaha':"NQC", 'Kalutara':0.6484, 'Matale':-0.2345, 'Kandy':-0.5822, 'Nuwara Eliya':0.5513, 'Galle':-0.9468, 'Matara':0.2380, 'Hambantota':"NQC", 'Jaffna':0.5660, 'Kilinochchi':0.5767, 'Mannar':0.5640, 'Mullaitivu':0.6064, 'Vavuniya':-0.0913, 'Trincomalee':0.5759, 'Batticaloa':0.7486, 'Ampara':0.0929, 'Puttalam':"NQC", 'Kurunegala':"NQC", 'Anuradhapura':"NQC", 'Polonnaruwa':0.1868, 'Badulla':-0.1891, 'Monaragala':"NQC", 'Kegalle':0.5523, 'Ratnapura':-0.0469}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "DANCE*#", 
    university: "Swami Vipulananda Institute of Aesthetic Studies", 
    districtRequirements: { 'Colombo':0.2439, 'Gampaha':"NQC", 'Kalutara':0.7635, 'Matale':-0.1395, 'Kandy':-0.6296, 'Nuwara Eliya':0.0173, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':"NQC", 'Jaffna':0.4060, 'Kilinochchi':0.4378, 'Mannar':0.5766, 'Mullaitivu':0.3287, 'Vavuniya':-0.3866, 'Trincomalee':0.9836, 'Batticaloa':0.4710, 'Ampara':-0.1534, 'Puttalam':"NQC", 'Kurunegala':"NQC", 'Anuradhapura':"NQC", 'Polonnaruwa':"NQC", 'Badulla':-0.2628, 'Monaragala':"NQC", 'Kegalle':"NQC", 'Ratnapura':"NQC"}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

{ 
    name: "DRAMA & THEATR*#", 
    university: "Swami Vipulananda Institute of Aesthetic Studies", 
    districtRequirements: { 'Colombo':-0.3643, 'Gampaha':"NQC", 'Kalutara':0.0772, 'Matale':0.4405, 'Kandy':-0.1319, 'Nuwara Eliya':0.3666, 'Galle':"NQC", 'Matara':"NQC", 'Hambantota':"NQC", 'Jaffna':0.9743, 'Kilinochchi':1.0107, 'Mannar':0.8425, 'Mullaitivu':0.9723, 'Vavuniya':0.3932, 'Trincomalee':0.9159, 'Batticaloa':0.9995, 'Ampara':0.7860, 'Puttalam':0.4275, 'Kurunegala':0.0571, 'Anuradhapura':"NQC", 'Polonnaruwa':-0.9508, 'Badulla':-0.0167, 'Monaragala':"NQC", 'Kegalle':0.7294, 'Ratnapura':0.4033}, 
    requiredSubjects: ["English","Economics","Geography","History","Home Economics","Agricultural Science","Mathematics","Combined Mathematics","Communication & Media Studies","Information & Communication Technology","Accounting","Business Statistics","Political Science","Logic & Scientific Method","Civil Technology","Electrical, Electronic and Information Technology","Agro Technology","Mechanical Technology","Food Technology","Buddhism","Hinduism","Christianity","Islam","Buddhist Civilization","Hindu Civilization","Christian Civilization","Islamic Civilization","Greek & Roman Civilization","Sinhala","Tamil","Chinese","French","German","Hindi","Japanese","Russian","Korean"] 
},

        


        // Add more degrees, university names, and their requirements
    ];
    let suitableDegrees = [];

 for (let i = 0; i < degrees.length; i++) {
    const degree = degrees[i];
    const districtZScore = degree.districtRequirements[district];

    //check if all selected subjects are in the required subjects and additional required subjects
    let hasRequiredSubjects = selectedSubjects.every(subject => degree.requiredSubjects.includes(subject));

    if (degree.name === "ENGINEERING TECHNOLOGY (ET)") {
        const additionalRequiredSubject1 = "Engineering Technology";
        const additionalRequiredSubject2 = "Science for Technology";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& (districtZScore <= zscore);
                                                         
                             
    }
    
    if (degree.name === "BIOLOGICAL SCIENCE") {
        const additionalRequiredSubject1 = "Biology";
        const additionalRequiredSubject2 = "Chemistry";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& (districtZScore <= zscore);
                                                         
                             
    }  
    if (degree.name === "QUANTITY SURVEYING") {
        const additionalRequiredSubject1 = "Combined Mathematics";
        const additionalRequiredSubject2 = "Higher Mathematics";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              ( selectedSubjects.includes(additionalRequiredSubject1)|| selectedSubjects.includes(additionalRequiredSubject2) )
                               && (districtZScore <= zscore);
                                                         
                             
    } 
    if (degree.name === "COMPUTING & INFORMATION SYSTEMS") {
        const additionalRequiredSubject1 = "Engineering Technology";
        const additionalRequiredSubject2 = "Science for Technology";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& (districtZScore <= zscore);
                                                         
                             
    } 
    if (degree.name === "PHYSICAL SCIENCE") {
        const additionalRequiredSubject1 = "Combined Mathematics";
        const additionalRequiredSubject2 = "Higher Mathematics";
        const additionalRequiredSubject3 = "Chemistry";
        const additionalRequiredSubject4 = "Physics";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              (( selectedSubjects.includes(additionalRequiredSubject1)|| selectedSubjects.includes(additionalRequiredSubject2) ) && (selectedSubjects.includes(additionalRequiredSubject3)|| selectedSubjects.includes(additionalRequiredSubject4)))
                               && (districtZScore <= zscore);
                                                         
                             
    } 
    if (degree.name === "INFORMATION TECHNOLOGY") {
        const additionalRequiredSubject1 = "Engineering Technology";
        const additionalRequiredSubject2 = "Science for Technology";
        const additionalRequiredSubject3 = "Information & Communication Technology";

   
        hasRequiredSubjects= selectedSubjects.includes(additionalRequiredSubject1)&&
        selectedSubjects.includes(additionalRequiredSubject2)&&
        electedSubjects.includes(additionalRequiredSubject3)&& (districtZScore <= zscore);
                                   
                                                         
                             
    } 
    
    if (degree.name === "PHYSICAL SCIENCE") {
        const additionalRequiredSubject1 = "Combined Mathematics";
        const additionalRequiredSubject2 = "Higher Mathematics";
        const additionalRequiredSubject3 = "Chemistry";
        const additionalRequiredSubject4 = "Physics";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& 
                              selectedSubjects.includes(additionalRequiredSubject3)&&
                              selectedSubjects.includes(additionalRequiredSubject4)&& (districtZScore <= zscore);                          
                             
    }
    if (degree.name === "SURVEYING SCIENCE") {
        const additionalRequiredSubject1 = "Physics";
        const additionalRequiredSubject2 = "Combined Maths";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& (districtZScore <= zscore);
                                                         
           
                              
    }  

    if (degree.name === "APPLIED SCIENCES (PHY.SC") {
        const additionalRequiredSubject1 = "Combined Mathematics";
        const additionalRequiredSubject2 = "Higher Mathematics";
        const additionalRequiredSubject3 = "Chemistry";
        const additionalRequiredSubject4 = "Physics";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& 
                              selectedSubjects.includes(additionalRequiredSubject3)&&
                              selectedSubjects.includes(additionalRequiredSubject4)&& (districtZScore <= zscore);                          
                             
    }

    if (degree.name === "MANAGEMENT") {
        hasRequiredSubjects= hasRequiredSubjects && 
        selectedSubjects.includes(additionalRequiredSubject1)&&
        selectedSubjects.includes(additionalRequiredSubject2)&&
        selectedSubjects.includes(additionalRequiredSubject3)&& (districtZScore <= zscore);
                                                        
    }  

    if (degree.name === "REAL ESTATE MANAGEMENT & VALUATION") {
        const additionalRequiredSubject1 = "Business Studies";
        const additionalRequiredSubject2 = "Economics";
   
        hasRequiredSubjects= hasRequiredSubjects && 
        selectedSubjects.includes(additionalRequiredSubject1)&&
        selectedSubjects.includes(additionalRequiredSubject2)&&
        selectedSubjects.includes(additionalRequiredSubject3)&& (districtZScore <= zscore);
    }
    if (degree.name === "COMMERCE") {
        const additionalRequiredSubject1 = "Business Studies";
        const additionalRequiredSubject2 = "Economics";
        const additionalRequiredSubject3 = "Accounting";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&&
                              selectedSubjects.includes(additionalRequiredSubject3)&& (districtZScore <= zscore);
                                                         
                             
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
        const basket1 = ["Economics", "Geography", "History", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology"];
        const basket2 = ["Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization"];
        const basket3 = ["Art", "Dancing", "Music", "Drama & Theatre", "Sinhala", "Baratha", "Oriental", "Carnatic", "Western", "Drama & Theatre Sinhala", "Drama & Theatre Tamil", "Drama & Theatre English"];
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
    if (degree.name === "HEALTH INFORMATION AND COMMUNICATION TECHNOLOGY") {
        const additionalRequiredSubject1 = "Engineering Technology";
        const additionalRequiredSubject2 = "Science for Technology";
        const additionalRequiredSubject3 = "Biosystems Technology";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&&
                              selectedSubjects.includes(additionalRequiredSubject3)&& (districtZScore <= zscore);
                                                         
                             
    } 
    if (degree.name === "ENGINEERING TECHNOLOGY (ET)") {
        const additionalRequiredSubject1 = "Engineering Technology";
        const additionalRequiredSubject2 = "Science for Technology";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& (districtZScore <= zscore);
                                                         
                             
    }
      
    if (degree.name === "LANDSCAPE ARCHITECTURE") {
        const additionalRequiredSubject1 = "Chemistry";
        const additionalRequiredSubject2 = "Biology";
        const additionalRequiredSubject3 = "Geography";
        const additionalRequiredSubject4 = "Art";
        const additionalRequiredSubject5 = "Combined Mathematics";
        const additionalRequiredSubject6 = "Higher Mathematics";
        const additionalRequiredSubject7 = "Agricultural Science";
        const additionalRequiredSubject8 = "Physics";
        
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& 
                              selectedSubjects.includes(additionalRequiredSubject3)&&
                              selectedSubjects.includes(additionalRequiredSubject4)&&
                              selectedSubjects.includes(additionalRequiredSubject5)&&
                              selectedSubjects.includes(additionalRequiredSubject6)&&
                              selectedSubjects.includes(additionalRequiredSubject7)&&
                              selectedSubjects.includes(additionalRequiredSubject8)&&(districtZScore <= zscore);                         
                             
    }  

    if (degree.name === "MANAGEMENT STUDIES (TV) - A") {
        const additionalRequiredSubject1 = "Business Studies";
        const additionalRequiredSubject2 = "Economics";
        const additionalRequiredSubject3 = "Accounting";
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&&
                              selectedSubjects.includes(additionalRequiredSubject3)&& (districtZScore <= zscore);                     
    } 
    
    if (degree.name === "MANAGEMENT STUDIES (TV) - A") {
        const additionalRequiredSubject1 = "Business Studies";
        const additionalRequiredSubject2 = "Economics";
        const additionalRequiredSubject3 = "Accounting";
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&&
                              selectedSubjects.includes(additionalRequiredSubject3)&& (districtZScore <= zscore);                     
    }  


    if (degree.name === "MANAGEMENT STUDIES (TV) - B") {
        const additionalRequiredSubject1 = "Business Studies";
        const additionalRequiredSubject2 = "Economics";
        const additionalRequiredSubject3 = "Accounting";
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&&
                              selectedSubjects.includes(additionalRequiredSubject3)&& (districtZScore <= zscore);
    }

    if (degree.name === "MANAGEMENT STUDIES (TV) - B") {
        const additionalRequiredSubject1 = "Business Studies";
        const additionalRequiredSubject2 = "Economics";
        const additionalRequiredSubject3 = "Accounting";
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&&
                              selectedSubjects.includes(additionalRequiredSubject3)&& (districtZScore <= zscore);
    }

    if (degree.name === "ISLAMIC STUDIES *") {
        const additionalRequiredSubject1 = " Islam";
        const additionalRequiredSubject2 = "Islamic Civilization";
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&&(districtZScore <= zscore);
                                                         
                             
    }
    
    if (degree.name === "FINANCIAL MATHEMATICS AND INDUSTRIAL STATISTICS") {
        const additionalRequiredSubject1 = "Combined Mathematics";
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&(districtZScore <= zscore);
                                                         
                             
    }

    

    if (degree.name === "FACILITIES MANAGEMENT") {
        const additionalRequiredSubject1 = "Chemistry";
        const additionalRequiredSubject2 = "Combined Mathematics";
        const additionalRequiredSubject3 = "Physics";
        const additionalRequiredSubject4 = "Business Studies";
        const additionalRequiredSubject5 = "Economics,Accounting";

        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&&
                              selectedSubjects.includes(additionalRequiredSubject3)&&
                              selectedSubjects.includes(additionalRequiredSubject4)&&
                              selectedSubjects.includes(additionalRequiredSubject5)&&(districtZScore <= zscore);
                                                         
                             
    }
    
    
    if (degree.name === "PEACE & CONFLICT RESOLUTION *") {
        const additionalRequiredSubject1 = "Candidates must provide a certified copy of their G.C.E. (Advanced Level) Examination results with their application";
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&(districtZScore <= zscore);
                                                         
                             
    }  

    if (degree.name === "ARABIC LANGUAGE *") {
        const additionalRequiredSubject1 = "Arabic language";
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&(districtZScore <= zscore);
                                                         
                             
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
    let resultHTML = '<h7>This system allows you to find a degree to your results according to the last year cutoff marks in your district. All details are based on UGC handbook.</h7><h2>Suitable Degrees:</h2><br><h4>*-Need to refer UGC Hand book <br>#- Courses of Study for which the subject oriented Practical Tests / Aptitude Tests were conducted. </h4><br><br>';
  
    if (suitableDegrees.length > 0) {
        suitableDegrees.forEach(degree => {
            resultHTML += `
                <div>
                     <h3>🎓${degree.name} at ${degree.university}</h3>
                       
                          <p>🔹Required Z-score for ${district}: ${degree.districtRequirements[district]} </p>
                          <p>🔹Required Subjects: ${degree.requiredSubjects.join(', ')}  </p>   
                          
                       </div>
                   
                              
                    <br>
                    
                </div>
   
            `;
        });
    } else {
        resultHTML += '<p>No suitable degrees found based on your Z-score and subjects.<br> Dear Student, Dont lose heart.There are many ways in which you can purse your degree.We have the means for that.</p>';

    }

    document.getElementById('result').innerHTML = resultHTML;
});