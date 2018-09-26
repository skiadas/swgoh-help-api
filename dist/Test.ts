import { SwgohHelpApiClient } from "./Code"

/**
 * Helper function to instanciate a swgoh.help API client
 * The `username` and `password`properties should be edited with you swgoh.help API credentials 
 */
function client_() {
  const settings: SwgohHelpApiSettings = {
     username: "???",
     password: "???"
  }
  // return new module.exports.SwgohHelpApiClient(settings)
  return new SwgohHelpApiClient(settings)
}


/**
 * Sample invokation of the /swgoh/player endpoint
 */
function Test_fetchPlayer() {
  const allycode = 213176142
  const allycodes = [allycode, "524-173-817"]
  let json: PlayerObject[]
  const client = client_()

  json = client.fetchPlayer( {
    allycodes: allycode,
    project: {
      allyCode: true,
      name: true,
      level: false,
      guildName: false,
      stats: false,
      roster: false,
      arena: false,
      updated: true
    }
  } )  // lone allycode
  json = client.fetchPlayer( {
    allycodes: allycodes as number[],
    project: {
      allyCode: true,
      name: true,
      level: false,
      guildName: false,
      stats: false,
      roster: false,
      arena: false,
      updated: true
    }
  } )  // formated string allycode
  json = client.fetchPlayer( {
    allycodes: [allycode],
    language: "eng_us",
    enums: true,
    project: {
      allyCode: true,
      name: true,
      level: false,
      guildName: false,
      stats: true,
      roster: false,
      arena: false,
      updated: true
    }
  } )
  json = client.fetchPlayer( { allycodes: allycode } )
  debugger
  return json
}


/**
 * Sample invokation of the /swgoh/guild endpoint
 */
function Test_fetchGuild() {
  const allycode = 213176142
  let json: GuildObject
  const client = client_()

  json = client.fetchGuild( {
    allycode: allycode,
    language: "eng_us",
    enums: false
  } )
  debugger
  return json
}


/**
 * Sample invokation of the /swgoh/units endpoint
 */
function Test_fetchUnits() {
  const allycode = 213176142
  let json
  const client = client_()

  json = client.fetchUnits( {
    allycodes: [allycode],
    language: "eng_us",
    enums: false
  } )
  debugger
}


/**
 * Sample invokation of the /swgoh/events endpoint
 */
function Test_fetchEvents() {
  let json
  const client = client_()

  json = client.fetchEvents( {
    language: "eng_us",
    enums: false
  } )
  debugger
}


/**
 * Sample invokation of the /swgoh/battles endpoint
 */
function Test_fetchBattles() {
  let json
  const client = client_()

  json = client.fetchBattles( {
    language: "eng_us",
    enums: false
  } )
  debugger
}


/**
 * Sample invokation of the /swgoh/data endpoint
 */
function Test_fetchData() {
  let json = {}
  const client = client_()
  const collections = [
    // "abilityList",
    // "battleEnvironmentsList",
    // "battleTargetingRuleList",
    // "categoryList",
    // "challengeList",
    // "challengeStyleList",
    // "effectList",
    // "environmentCollectionList",
    // "equipmentList",
    // "eventSamplingList",
    // "guildExchangeItemList",
    // "guildRaidList",
    // "helpEntryList",
    // "materialList",
    // "playerTitleList",
    // "powerUpBundleList",
    // "raidConfigList",
    // "recipeList",
    // "requirementList",
    // "skillList",
    // "starterGuildList",
    // "statModList",
    // "statModSetList",
    // "statProgressionList",
    // "tableList",
    // "targetingSetList",
    // "territoryBattleDefinitionList",
    "territoryWarDefinitionList",
    // "unitsList",
    "unlockAnnouncementDefinitionList",
    "warDefinitionList",
    "xpTableList"
  ]

  collections.forEach( e => {
    json[e] = client.fetchData( {
      collection: e,
      language: "eng_us",
      enums: false
    } )
  } )
  debugger
}
