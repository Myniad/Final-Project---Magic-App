using Final_Project___Magic_App.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Final_Project___Magic_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeckController : ControllerBase
    {
        DeckDbContext dbcontext = new DeckDbContext();

        //method to add deck
        [HttpPost("CreateDeck")]
        public DeckTable createDeck(string deckName, string user)
        {
            DeckTable newDeck = new DeckTable()
            {
                DeckName = deckName,
                Uid = user           
            };
            dbcontext.DeckTables.Add(newDeck);
            dbcontext.SaveChanges();
            return newDeck;
        }

        //method to get deck by name
        [HttpGet("GetDeckByName")]
        public DeckTable searchDeckByName(string UID, string DeckName)
        {
            return dbcontext.DeckTables.FirstOrDefault(u => u.Uid == UID && u.DeckName == DeckName);
            //&&(u=>u.DeckName == deckName))
        }

        //method to get all decks by userID (google)
        [HttpGet("GetAllDeckByUser")]
        public List<DeckTable> allDecksByID(string UID)
        {
            try
            {
                List < DeckTable > dList = new List<DeckTable>();
                return dbcontext.DeckTables.Where(d => d.Uid == UID).ToList();
            }

            catch (Exception)
            {
                List<DeckTable> dList = new List<DeckTable>();
                return dList;
            }
            


            //foreach(DeckTable d in )
            //{
            //    dList.Add();
            //}
            
        }

        [HttpPut("ChangeDeckName")]
        public string changeDeckName(int ID, string newName )
        {

            dbcontext.DeckTables.FirstOrDefault(d => d.Id == ID).DeckName = newName;
            dbcontext.SaveChanges();
            return $"Name successfully changed to {newName}";
        }

        [HttpDelete("DeleteDeck")]
        public void deleteDeck(int ID)
        {
            DeckTable deleteDeck = dbcontext.DeckTables.FirstOrDefault(d => d.Id == ID);
            dbcontext.Remove(deleteDeck);
            dbcontext.SaveChanges();
            Console.WriteLine("Successfully deleted deck");
            
        }

        [HttpDelete("DeleteCardFromDeck")]
        public void deleteCardFromDeck(int ID)
        {
            DeckCardTable deleteCard = dbcontext.DeckCardTables.FirstOrDefault(d => d.Id == ID);
            dbcontext.DeckCardTables.Remove(deleteCard);
            dbcontext.SaveChanges();
            Console.WriteLine("Successfully deleted card");

        }


        [HttpPost("AddCardToDeck")]
        public void addCardToDeck(string cardId, int deckId, string cardName)
        {
            DeckCardTable addCard = new DeckCardTable()
            {
                CardId = cardId,
                CardName = cardName,
                DeckId = deckId.ToString()
            };
            dbcontext.DeckCardTables.Add(addCard);
            dbcontext.SaveChanges();
        }

        [HttpGet("GetDecks")]
        public List<DeckTable> GetDecks()
        {
            return dbcontext.DeckTables.ToList();
        }

        [HttpGet("GetDeckById")]
        public DeckTable searchDeckById(int ID)
        {
            return dbcontext.DeckTables.FirstOrDefault(u => u.Id == ID);
            //&&(u=>u.DeckName == deckName))
        }

        [HttpGet("GetCardsByDeckId")]
        public List<DeckCardTable> getCardsByDeckId(string ID)
        {
            return dbcontext.DeckCardTables.Where(u => u.DeckId == ID).ToList();
        }


    }
}
