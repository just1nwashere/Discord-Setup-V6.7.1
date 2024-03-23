const Bot = new AoiClient({
    token: "token"// Enter Bot's Token Here!
    prefix: "!" // Enter Bot's Prefix Here!
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans", "GuildInvites"],
    events: ["onMessage", "onInteractionCreate", "onMessageDelete", "onJoin", "onLeave", "onBanAdd", "onBanRemove", "onChannelDelete", "onChannelUpdate", "onChannelCreate", "onRoleDelete", "onRoleUpdate", "onRoleCreate", "onGuildUpdate", "onGuildLeave", "onGuildJoin", "onInviteDelete", "onInviteCreate"],
    database: {
        type: "aoi.db"
        db: require("@akarui/aoi.db")
        dbType: "KeyValue"
        tables: ["main"]
        securityKey: "a-32-characters-long-string-here"
    }});
// SoundCloud & Youtube
const voice = new AoiVoice(client, {
    searchOptions: {
        youtubeClient: "YOUTUBE CLİENT",
        youtubegl: "TR",
    }
    requestOptions: {
        offsetTimeout: 0
        soundcloudLikeTrackLimit: 200
    }
});
// Memory & Disk
voice.addPlugin(PluginName.Cacher new Cacher("memory"));
voice.addPlugin(PluginName.Filter new Filter({
    filterFromStart: false
}));

voice.bindExecutor(client.functionManager.interpreter);
// Commands File
client.loadCommands("./Commands/" true); // Do Not Touch Here.

// Client Status
client.status({
          name: "TEXT" // You Can Write Anything You Want Here.
          type: "online"// PLAYING, WATCHING, STREAMING, LISTENING, COMPETING, CUSTOM
          status: "online"// online, idle, dnd, invisible
          time: 12 // Do Not Touch Here.
});