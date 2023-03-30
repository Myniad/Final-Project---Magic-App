using Final_Project___Magic_App.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Final_Project___Magic_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
    {
        DeckDbContext dbcontext = new DeckDbContext();

        //requesting all cards from scryfall, Probably not going to use this but adding it in for testing purposes

        [HttpGet]
        public List<CardModel> getAllCards()
        {
            return new List<CardModel>();
        }
 

        //searching cards by the exact name note that this should be case insensitive
        [HttpGet("SearchExact")]
        public CardModel searchExact(string cardName)
        {
            try
            {
                return CardDAL.GetExactCard(cardName);
            }
            
            catch(Exception)
            {
                return new CardModel();
            }
        }

        [HttpGet("GetSingleCard")]
        public Datum getSingleCard(string id)
        {
            try
            {
                return CardDAL.GetSingleCard(id);
            }

            catch (Exception)
            {
                return new Datum();
            }
        }

        //searching for cards using a fuzzy search
        //fuzzy is a search for all cards matching what the user has typed in 

        [HttpGet("SearchFuzzy")]
        public List<CardModel> searchFuzzy(string cardName)
        {
            //example request https://api.scryfall.com/cards/named?fuzzy={search}
            return new List<CardModel>();
        }

        [HttpGet("SearchType")]
        public List<CardModel> searchByType(string type)
        {
            return new List<CardModel>();
        }
    }
}


