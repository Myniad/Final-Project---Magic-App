using Newtonsoft.Json;
using System.Net;

namespace Final_Project___Magic_App.Models
{
    public class CardDAL
    {
        public static CardModel GetExactCard(string cardName)

        {
            //Setup
            string url = $"https://api.scryfall.com/cards/search?q={cardName}+(game%3Apaper)";


            //request
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            //Convert it to JSON
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();
            Console.WriteLine(JSON);
            Console.WriteLine();
            Console.WriteLine();
            //Convert to c#
            CardModel result = JsonConvert.DeserializeObject<CardModel>(JSON);
            Console.WriteLine(result);
            return result;
        }
        
        public static List<CardModel> GetFuzzyCard(string search)

        {
            //Setup
            string url = $"https://api.scryfall.com/cards/named?fuzzy={search}";


            //request
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            //Convert it to JSON
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string JSON = reader.ReadToEnd();

            //Convert to c#
            List<CardModel> result = JsonConvert.DeserializeObject<List<CardModel>>(JSON);
            return result;
        }
    }
}
