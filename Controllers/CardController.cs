using Final_Project___Magic_App.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Final_Project___Magic_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
    {

        //requesting all cards from scryfall, Probably not going to use this but adding it in for testing purposes

        [HttpGet]
        public List<CardModel> getAllCards()
        {
            return new List<CardModel>();
        }

        //searching cards by the exact name note that this should be case insensitive
        [HttpGet] 
        public CardModel searchExact(string cardName)
        {
            return new CardModel();
        }

        //searching for cards using a fuzzy search
        //fuzzy is a search for all cards matching what the user has typed in 
        [HttpGet] 
        public List<CardModel> searchFuzzy(string cardName) 
        { 
            return new List<CardModel>();
        }

        [HttpGet]
        public List<CardModel> searchByType(string type)
        {
            return new List<CardModel>();
        }
    }
}
