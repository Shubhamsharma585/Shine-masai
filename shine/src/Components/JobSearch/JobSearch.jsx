import React from 'react'
import JobList from './JobList'

function JobSearch() {
    const topCities=["Jobs in Bangalore" ,"Jobs in Delhi" ,"Jobs in Hyderabad" ,"Jobs in Chennai" ,"Jobs in Mumbai" ,"Jobs in Kolkata" ,"Jobs in Pune" ,"Jobs in Coimbatore" ,"Jobs in Chandigarh" ,"Jobs in Lucknow" ,"Jobs in Jaipur" ,"Jobs in Ahmedabad" ,"Jobs in Indore" ,"Jobs in Gurgaon" ,"Jobs in Noida" ,"Jobs in Bhubaneswar"];
    const cities2=["Jobs in Amalapuram","Jobs in Anantpur","Jobs in Chittoor","Jobs in East Godavari","Jobs in Guntakal","Jobs in Guntur","Jobs in Hyderabad","Jobs in Kadapa","Jobs in Kakinada","Jobs in Kavali","Jobs in Kurnool","Jobs in Machilipatnam","Jobs in Nellore","Jobs in Ongole","Jobs in Prakasam","Jobs in Rajahmundry","Jobs in Srikakulam","Jobs in Tadepalligudem","Jobs in Tirumala","Jobs in Tirupati","Jobs in Vijayawada","Jobs in Vishakhapatnam","Jobs in Vizianagaram","Jobs in West Godavari"];
    const cities3=["Jobs in Anjaw","Jobs in Changlang","Jobs in Dibang Valley","Jobs in East Kameng","Jobs in East Siang","Jobs in Itanagar","Jobs in Kurung Kumey","Jobs in Lohit","Jobs in Papum Pare","Jobs in Tawang","Jobs in Tirap","Jobs in West Kameng","Jobs in West Siang"]
    const cities4=["Jobs in Baksa","Jobs in Barpeta","Jobs in Bongaigaon","Jobs in Cachar","Jobs in Chirang","Jobs in Darrang","Jobs in Dhemaji","Jobs in Dhubri","Jobs in Dibrugarh","Jobs in Dima Hasao","Jobs in Goalpara","Jobs in Golaghat","Jobs in Guwahati","Jobs in Hailakandi","Jobs in Jorhat","Jobs in Kamrup","Jobs in Kamrup Metropolitan","Jobs in Karbi Anglong","Jobs in Karimganj","Jobs in Kokrajhar","Jobs in Lakhimpur","Jobs in Morigaon","Jobs in Nagaon","Jobs in Nalbari","Jobs in Silchar","Jobs in Sivasagar","Jobs in Sonitpur","Jobs in Tarapur","Jobs in Tinsukia","Jobs in Udalguri"]
    const cities5=["Jobs in Araria","Jobs in Arwal","Jobs in Begusarai","Jobs in Bhagalpur","Jobs in Bhojpur","Jobs in Buxar","Jobs in Darbhanga","Jobs in Gaya","Jobs in Gopalganj","Jobs in Jamui","Jobs in Jehanabad","Jobs in Kaimur","Jobs in Katihar","Jobs in Khagaria","Jobs in Kishanganj","Jobs in Lakhisarai","Jobs in Madhepura","Jobs in Madhubani","Jobs in Maharajganj","Jobs in Munger","Jobs in Muzaffarpur","Jobs in Muzzafarpur","Jobs in Nalanda","Jobs in Nawada","Jobs in Patna","Jobs in Purnia","Jobs in Rohtas","Jobs in Saharsa","Jobs in Samastipur","Jobs in Saran","Jobs in Sheikhpura","Jobs in Sheohar","Jobs in Sitamarhi","Jobs in Siwan","Jobs in Supaul","Jobs in Vaishali"]
    const cities6=["Jobs in Chandigarh","Jobs in Mohali","Jobs in Panchkula"]
    const cities7=["Jobs in Baloda Bazar","Jobs in Bastar","Jobs in Bhillai","Jobs in Bijapur","Jobs in Bilaspur","Jobs in Dakshin Bastar Dantewada","Jobs in Dhamtari","Jobs in Durg","Jobs in Janjgir Champa","Jobs in Kabirdham","Jobs in Korba","Jobs in Koriya","Jobs in Mahasamund","Jobs in Narayanpur","Jobs in Raigarh","Jobs in Raipur","Jobs in Rajnandgaon","Jobs in Surguja","Jobs in Uttar Bastar Kanker"]
    const cities8=["Jobs in Dadra Nagar Haveli","Jobs in Silvassa"]
    const cities9=["Jobs in Delhi","Jobs in Faridabad","Jobs in Ghaziabad","Jobs in Gurgaon","Jobs in Noida"]
    const cities10=["Jobs in North Goa","Jobs in Panaji","Jobs in South Goa","Jobs in Vasco da Gama"]
    const cities11=["Jobs in Ahmedabad","Jobs in Amreli","Jobs in Anand","Jobs in Ankleshwar","Jobs in Banaskantha","Jobs in Bharuch","Jobs in Bhavnagar","Jobs in Bhuj","Jobs in Dahod","Jobs in Dang","Jobs in Gandhidham","Jobs in Gandhinagar","Jobs in Gir","Jobs in Halol","Jobs in Jamnagar","Jobs in Junagadh","Jobs in Junagarh","Jobs in Kandla","Jobs in Mahesana","Jobs in Mehsana","Jobs in Mundra","Jobs in Navsari","Jobs in Panchmahal","Jobs in Patan","Jobs in Porbandar","Jobs in Rajkot","Jobs in Surat","Jobs in Surendranagar","Jobs in Tapi","Jobs in Vadodara","Jobs in Valsad","Jobs in Vapi"]
    const cities12=["Jobs in Ambala","Jobs in Bahadurgarh","Jobs in Bawal","Jobs in Bhiwani","Jobs in Faridabad","Jobs in Fatehabad","Jobs in Gurgaon","Jobs in Hisar","Jobs in Jhajjar","Jobs in Jind","Jobs in Kaithal","Jobs in Karnal","Jobs in Kundli","Jobs in Kurukshetra","Jobs in Manesar","Jobs in Nuh","Jobs in Palwal","Jobs in Panchkula","Jobs in Panipat","Jobs in Rewari","Jobs in Rohtak","Jobs in Saha","Jobs in Sirsa","Jobs in Sonipat","Jobs in Yamunanagar"]
    const cities13=["Jobs in Baddi","Jobs in Bilaspur","Jobs in Chamba","Jobs in Dalhousie","Jobs in Dharamsala","Jobs in Kangra","Jobs in Kullu","Jobs in Manali","Jobs in Mandi","Jobs in Palampur","Jobs in Shimla","Jobs in Sirmaur","Jobs in Solan","Jobs in Una"]
    const cities14=["Jobs in Ahmednagar","Jobs in Ahmednagar","Jobs in Akola","Jobs in Ambernath","Jobs in Amravati","Jobs in Aurangabad","Jobs in Baramati","Jobs in Bhandara","Jobs in Bhiwandi","Jobs in Boisar","Jobs in Chakan","Jobs in Chandrapur","Jobs in Dhule","Jobs in Dombivali","Jobs in Gadchiroli","Jobs in Gondia","Jobs in Hingoli","Jobs in Jalgaon","Jobs in Jalna","Jobs in Kalyan","Jobs in Kharghar","Jobs in Kolhapur","Jobs in Latur","Jobs in Manor","Jobs in Mira Bhayandar","Jobs in Mumbai","Jobs in Nagpur","Jobs in Nanded","Jobs in Nandurbar","Jobs in Nashik","Jobs in Navi Mumbai","Jobs in Osmanabad","Jobs in Palghar","Jobs in Panvel","Jobs in Parbhani","Jobs in Pimpri Chinchwad","Jobs in Pune","Jobs in Raigad","Jobs in Ratnagiri","Jobs in Sangli","Jobs in Satara","Jobs in Shirdi","Jobs in Sindhudurg","Jobs in Solapur","Jobs in Thane","Jobs in Vasai","Jobs in Vita","Jobs in Wardha","Jobs in Yavatmal"]
    const cities15=["Jobs in Agra","Jobs in Aligarh","Jobs in Allahabad","Jobs in Ambedkar Nagar","Jobs in Amroha","Jobs in Auraiya","Jobs in Azamgarh","Jobs in Baghpat","Jobs in Bahraich","Jobs in Balrampur","Jobs in Banda","Jobs in Barabanki","Jobs in Bareilly","Jobs in Basti","Jobs in Bijnor","Jobs in Budaun","Jobs in Bulandshahr","Jobs in Chandauli","Jobs in Chitrakoot","Jobs in Deoria","Jobs in Etah","Jobs in Etawah","Jobs in Faizabad","Jobs in Farrukhabad","Jobs in Fatehpur","Jobs in Firozabad","Jobs in Gautam Buddha Nagar","Jobs in Ghaziabad","Jobs in Ghazipur","Jobs in Gonda","Jobs in Gorakhpur","Jobs in Hamirpur","Jobs in Hardoi","Jobs in Hathras","Jobs in Jalaun","Jobs in Jaunpur","Jobs in Jhansi","Jobs in Kannauj","Jobs in Kanpur","Jobs in Kasganj","Jobs in Kushinagar","Jobs in Lalitpur","Jobs in Lucknow","Jobs in Mahoba","Jobs in Mainpuri","Jobs in Mathura","Jobs in Mau","Jobs in Meerut","Jobs in Mirzapur","Jobs in Moradabad","Jobs in Muzaffarnagar","Jobs in Muzzafarnagar","Jobs in Noida","Jobs in Orai","Jobs in Patti","Jobs in Pilibhit","Jobs in Raebareli","Jobs in Rampur","Jobs in Saharanpur","Jobs in Sant Kabir Nagar","Jobs in Sant Ravidas Nagar","Jobs in Shahjahanpur","Jobs in Shravasti","Jobs in Siddharthnagar","Jobs in Sitapur","Jobs in Sonbhadra","Jobs in Sultanpur","Jobs in Unnao","Jobs in Varanasi"]
    const cities16=["Jobs in Almora","Jobs in Bageshwar","Jobs in Chamoli","Jobs in Champawat","Jobs in Dehradun","Jobs in Haldwani","Jobs in Haridwar","Jobs in Kashipur","Jobs in Lansdowne","Jobs in Mussoorie","Jobs in Nainital","Jobs in Rishikesh","Jobs in Roorkee","Jobs in Rudrapur","Jobs in Tehri Garhwal","Jobs in Udham Singh Nagar","Jobs in Uttarkashi"]
    const cities17=["Jobs in Adra","Jobs in Asansol","Jobs in Bally","Jobs in Bankura","Jobs in Bardhaman","Jobs in Birbhum","Jobs in Burdwan","Jobs in Dakshin Dinajpur","Jobs in Darjeeling","Jobs in Durgapur","Jobs in Haldia","Jobs in Haripur","Jobs in Hooghly","Jobs in Howrah","Jobs in Jalpaiguri","Jobs in Kharagpur","Jobs in Kolkata","Jobs in Malda","Jobs in Murshidabad","Jobs in Nadia","Jobs in Nayagarh","Jobs in Purba Medinipur","Jobs in Puruliya","Jobs in Siliguri","Jobs in Uttar Dinajpur"]


    return (
        <div>
            <JobList list={topCities} heading={"Jobs in Top Cities"}/>
            <JobList list={cities2} heading={"Jobs in Andhra Pradesh"}/>
            <JobList list={cities3} heading={"Jobs in ArunachalPradesh"}/>
            <JobList list={cities4} heading={"Jobs in Assam"}/>
            <JobList list={cities5} heading={"Jobs in Bihar"}/>
            <JobList list={cities6} heading={"Jobs in Chandigarh Region"}/>
            <JobList list={cities7} heading={"Jobs in Chattisgarh"}/>
            <JobList list={cities8} heading={"Jobs in Dadar and Nagar Haveli"}/>
            <JobList list={cities9} heading={"Jobs in Delhi-NCR Region"}/>
            <JobList list={cities10} heading={"Jobs in Goa"}/>
            <JobList list={cities11} heading={"Jobs in Gujarat"}/>
            <JobList list={cities12} heading={"Jobs in Haryana"}/>
            <JobList list={cities13} heading={"Jobs in Himachal Pradesh"}/>
            <JobList list={cities14} heading={"Jobs in Mahahrashtra"}/>
            <JobList list={cities15} heading={"Jobs in Uttar Pradesh"}/>
            <JobList list={cities16} heading={"Jobs in UttarKhand"}/>
            <JobList list={cities17} heading={"Jobs in West Bengal"}/>
           
            
            
        </div>
    )
}

export default JobSearch
