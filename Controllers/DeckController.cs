﻿using Final_Project___Magic_App.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Final_Project___Magic_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeckController : ControllerBase
    {
        DeckDbContext dbcontext = new DeckDbContext();

        //method to add deck
        [HttpGet("CreateDeck")]
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
            List<DeckTable> dList = new List<DeckTable>();


            foreach(DeckTable d in dbcontext.DeckTables.Where(d=>d.Uid==UID).ToList())
            {
                dList.Add(dbcontext.DeckTables.FirstOrDefault(d => d.Uid == UID));
            }
            return dList;
        }


        [HttpGet("GetDecks")]
        public List<DeckTable> GetDecks()
        {
            return dbcontext.DeckTables.ToList();
        }





    }
}