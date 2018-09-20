const Discord = require("discord.js");
const client = new Discord.Client();




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing...`,"http://twitch.tv/Mohamed192837465")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" ياليييل شتبيي!!");
    }
});

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47

client.on('message', message => {
    if (message.content === "$id") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setTitle(`info about ${message.guild.name}`)
   .addField("Server Owner 👑",`➥ ` + `${message.guild.owner.user.username}`, true)
   .addField('Server ID 🆔',`➥` + message.guild.id, true)
   .addField("Owner Tag",`➥ ` +  `#` + message.guild.owner.user.discriminator, true)
   .addField("Owner ID 🆔",`➥ ` + message.guild.owner.user.id, true)
   .addField("Server Region📡",`➥ ` + message.guild.region, true)
   .addField("Server Member Size🏧",`➥ ` + message.guild.members.size, true)
   .addField("Server Channels Number🏧",`➥ ` + message.guild.channels.size, true)
   .addField("Server Roels Number🏧",`➥ ` + message.guild.roles.size, true)
   .addField("AFK channel💤",`➥ ` + message.guild.afkChannel || 'Null', true)
   .addField("Server Created AT",`➥ ` + message.guild.createdAt, true)
   .addField(`info about ${message.author.username}`, `➥ `)
   .addField("Name",`➥ ` + `${message.author.username}`, true)
   .addField('Tag',`➥ ` + "#" +  message.author.discriminator, true)
   .addField("ID 🆔",`➥ ` + message.author.id, true)
   .addField(" Account Created At",`➥ ` + message.author.createdAt, true)
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL)
      
      
   message.channel.sendEmbed(embed);
     }
 });
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47

client.on('message' , message => {;
  if(message.author.bot) return;

    if(message.content.startsWith('$xo')) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:'] 
  var grid_message;

  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1); 
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `مباراة بين <@${player1_id}> و <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(من الخاسر, انت تلعب هذا الدور مع نفسك :joy:)_'
    }
    message.channel.send(`xo! ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful xo game initialization"))
    .catch(console.error);
    message.channel.send('يتم تحميل... انتظر الريئاكشن :ok:')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`انه دور <@${turn_id}> علامتك هي${symbol}`)
      .then((new_new_message) => {
        require('./alpha.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful xo listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful xo react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`_مهلا مهلا_ :anger: \`(استعمل هذا: ${prefix}xo @player1 @player2)\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47


client.on("message", message => {
 
  function discoRole() {
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      theRole.edit({color: random}).catch(e => {
        return message.channel.send(":x: **Error:** The role you specified in the `config.json` is either not a role on this server, or his a role higher than the highest role that I have.");
      });
    });
  }
 
  if(message.content.startsWith(prefix + "startdisco")) {
    if(allowedUsers.includes(message.author.id)) {
    setInterval(() => { discoRole(); }, config.ms);
    message.channel.send("```css\nDiscoing...```");
    message.channel.send("Please make sure you read the README, you could get IP banned from discord because of ratelimits.");
  } else {
    message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
} else
 
if(message.content.startsWith(prefix + "stopdisco")) {
  if(allowedUsers.includes(message.author.id)) {
  message.channel.send("I've stopped discoing.");
  setTimeout(() => { console.log(process.exit(0)); }, 300);
} else {
  message.reply(`You do not have permission to disco. If you have downloaded this bot off of github please go to the config.json and add your user ID to the "allowedUsers" value.`);
  }
}
 
});
const config = require('./config.json');
const allowedUsers = config.allowedUsers;
const roles = config.roleToDisco;
 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("$$كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
client.on('message', message => {
    var prefix = "$";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**$bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
    

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
client.on('message', message => {
	
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	
	var command = message.content.toLowerCase().split(" ")[0]; // حقوق الفا كوودز Alpha Codes.
	var args = message.content.toLowerCase().split(" ");
	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
	var prefix = '$'; // هنا تقدر تغير البرفكس <==================
	
	if(command == prefix + 'role') {
		if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
		if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | I dont have **MANAGE_ROLES** Permission!');
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');

		let roleCommand = new Discord.RichEmbed()
		.setTitle(':white_check_mark: Role Command.')
		.setColor('GREEN')
		.setDescription(`**\n${prefix}role <SOMEONE> <ROLE>**\n➥ \`\`For give or delete from some one the role.\`\`\n\n**${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete from the humans role.\`\`\n\n**${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete from the bots role.\`\`\n\n**${prefix}role all add <ROLE>**\n➥ \`\`For give all role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For remove from all role.\`\``)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)

		if(!args[1]) return message.channel.send(roleCommand);
		if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(roleCommand);

		if(userM) {
			var argsRole = message.content.toLowerCase().split(' ').slice(2);
		}else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
			var argsRole = message.content.toLowerCase().split(' ').slice(3); // حقوق الفا كوودز Alpha Codes.
		}

		var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));

		if(userM) {
			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');
			if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` Any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);
			
			if(!message.guild.member(userM.user).roles.has(getRole.id)) {
				message.guild.member(userM.user).addRole(getRole.id);
				message.channel.send(`:white_check_mark: | Successfully \`\`GIVE\`\` The role **${getRole.name}** To user **${userM.user.tag}**`);
			}else if(message.guild.member(userM.user).roles.has(getRole.id)) {
				message.guild.member(userM.user).removeRole(getRole.id);
				message.channel.send(`:white_check_mark: | Successfully \`\`DELETE\`\` The role **${getRole.name}** From user **${userM.user.tag}**`);
			}
		}else if(args[1] === 'humans') {
			let notArgs = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Role Command.')
			.setColor('GREEN')
			.setDescription(`**\n${prefix}role humans add <ROLE>**\n➥ \`\`For give the humans the role.\`\`\n\n**${prefix}role humans remove <ROLE>**\n➥ \`\`For delete the role from all humans.\`\``)
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL)
			
			if(!args[2]) return message.channel.send(notArgs);
			if(!args[3]) return message.channel.send(notArgs); // حقوق الفا كوودز Alpha Codes.
			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(args[2] === 'add') {
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
				if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);

				let humansSure = new Discord.RichEmbed()
				.setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.

				message.channel.send(humansSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.

					let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
					let give = msg.createReactionCollector(giveHim, { time: 60000 });
					let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });

					give.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}** ...`).then(message1 => {
							message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
								message.guild.member(m).addRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Humans** The role **${getRole.name}** .`);
								}, 10000)
							});
						});
					});
					dontGive.on('collect', r => { // حقوق الفا كوودز Alpha Codes.
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					});
				})
			}else if(args[2] === 'remove') {
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
				if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);

				let humansSure = new Discord.RichEmbed()
				.setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans?`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(humansSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.

					let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
					let remove = msg.createReactionCollector(removeRole, { time: 60000 });
					let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

					remove.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size}** Humans the role **${getRole.name}**...`).then(message1 => {
							message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
								message.guild.member(m).removeRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Humans** .`);
								}, 10000)
							});
						});
					}); // حقوق الفا كوودز Alpha Codes.
					dontRemove.on('collect', r => {
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					});
				})
			} // حقوق الفا كوودز Alpha Codes.
		}else if(args[1] === 'bots') {
		let notArgs = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Role Command.')
			.setColor('GREEN')
			.setDescription(`**\n${prefix}role bots add <ROLE>**\n➥ \`\`For give the bots the role.\`\`\n\n**${prefix}role bots remove <ROLE>**\n➥ \`\`For delete the role from all bots.\`\``)
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL) // حقوق الفا كوودز Alpha Codes.
			
			if(!args[2]) return message.channel.send(notArgs);
			if(!args[3]) return message.channel.send(notArgs);
			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(args[2] === 'add') {
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
				if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);

				let botsSure = new Discord.RichEmbed()
				.setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give him the role.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(botsSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎')) // حقوق الفا كوودز Alpha Codes.

					let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
					let give = msg.createReactionCollector(giveHim, { time: 60000 });
					let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });

					give.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
							message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
								message.guild.member(b).addRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give all **Bots** The role **${getRole.name}** .`);
								}, 10000)
							});
						});
					});
					dontGive.on('collect', r => {
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					});
				})
			}else if(args[2] === 'remove') { // حقوق الفا كوودز Alpha Codes.
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
				if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);

				let botsSure = new Discord.RichEmbed()
				.setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && m.user.bot).size}** Bots?`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(botsSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎'))

					let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
					let remove = msg.createReactionCollector(removeRole, { time: 60000 });
					let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

					remove.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size}** Bots the role **${getRole.name}**...`).then(message1 => {
							message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
								message.guild.member(b).removeRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From all **Bots** .`);
								}, 10000)
							});
						});
					});
					dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					});
				})
			}
		}else if(args[1] === 'all') { // حقوق الفا كوودز Alpha Codes.
			let notArgs = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Role Command.')
			.setColor('GREEN')
			.setDescription(`**\n${prefix}role all add <ROLE>**\n➥ \`\`For give all the role.\`\`\n\n**${prefix}role all remove <ROLE>**\n➥ \`\`For delete the role from all.\`\``)
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL)
			
			if(!args[2]) return message.channel.send(notArgs);
			if(!args[3]) return message.channel.send(notArgs);
			if(!getRole) return message.channel.send(':no_entry: | I couldn\'t find the role!');
			if(getRole.name === '@everyone') return message.channel.send(':no_entry: | I couldn\'t find the role!');

			if(args[2] === 'add') {
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`); // حقوق الفا كوودز Alpha Codes.
				if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);

				let allSure = new Discord.RichEmbed()
				.setTitle(`:red_circle: Are you sure to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ?`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, give all the role.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(allSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎'))

					let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
					let give = msg.createReactionCollector(giveAll, { time: 60000 });
					let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });

					give.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to give **${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
							message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
								message.guild.member(m).addRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully give **All** The role **${getRole.name}** .`);
								}, 10000) // حقوق الفا كوودز Alpha Codes.
							});
						});
					});
					dontGive.on('collect', r => {
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					});
				})
			}else if(args[2] === 'remove') {
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
				if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);

				let allSure = new Discord.RichEmbed() // حقوق الفا كوودز Alpha Codes.
				.setTitle(`:red_circle: Are you sure to remove **${getRole.name}** from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** ?`)
				.setColor('RED')
				.setDescription('**\nYou have 1 min to choose reaction you want.**\n\n✅ = Sure, remove the role from him.\n\n❎ = No no, cancel.')
				.setTimestamp()
				.setFooter(message.author.tag, message.author.avatarURL)

				message.channel.send(allSure).then(msg => {
					msg.react('✅').then(() => msg.react('❎'))

					let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
					let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id; // حقوق الفا كوودز Alpha Codes.
					let remove = msg.createReactionCollector(removeRole, { time: 60000 });
					let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });

					remove.on('collect', r => {
						msg.delete();
						message.channel.send(`:timer: | Now you must wait some time to delete from **${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size}** The role **${getRole.name}** ...`).then(message1 => {
							message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
								message.guild.member(m).removeRole(getRole.id);
								setTimeout(() => {
									message1.edit(`:white_check_mark: | <@${message.author.id}> Successfully remove the role **${getRole.name}** From **All** .`);
								}, 10000)
							});
						});
					});
					dontRemove.on('collect', r => { // حقوق الفا كوودز Alpha Codes.
						msg.delete();
						message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
					}); // حقوق الفا كوودز Alpha Codes.
				})
			} // حقوق الفا كوودز Alpha Codes.
		}
	}
});

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "$";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("فين العضو ؟");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما عندك برمشن");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما تقدر تسوي كيك للأدمين")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'kick-ban');
      if(!kickChannel) return message.channel.send("لم اجد روم ال kick-ban");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });




client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefix = "$";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!kUser) return message.channel.send("فين العضو ؟");
          let kReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما عندك برمشن");
          if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ما تقدر تسوي بان للأدمين")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#8e0505")
          .addField("Banned User", `${bUser} with ID ${bUser.id}`)
          .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", kReason);

          let banChannel = message.guild.channels.find('name', 'kick-ban');
          if(!banChannel) return message.channel.send("لم اجد روم kick-ban");

          message.guild.member(bUser).kick(bReason)
          banChannel.send(banEmbed);
        }
        });

	client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('gmail')){
        message.delete()
    return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('snapchat')){
        message.delete()
    return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('instagram')){
        message.delete()
    return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('twitter')){
        message.delete()
    return message.reply(`** لايمكنك  نشر التويتر هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('facebook')){
        message.delete()
    return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
    }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube')){
        message.delete()
    return message.reply(`** لايمكنك نشر اروابط في هذا اسرفر **`)
    }

});
 
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});

client.on('message', m3a4x => {
  if (m3a4x.content.startsWith('$mute')) {
if (!m3a4x.member.hasPermission("MOVE_MEMBERS")) return m3a4x.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
let men = m3a4x.mentions.users.first()
let mas = m3a4x.author
if(!men) return m3a4x.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
m3a4x.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          SEND_MESSAGES: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("#36393e")
.setDescription(`**
 <@${men.id}>
لقد تم اعطائك ميوت كتابي
بواسطة : <@${m3a4x.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(m3a4x.guild.name, m3a4x.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم اعطائه الميوت الكتابي بنجاح
بواسطة : <@${m3a4x.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
m3a4x.channel.sendEmbed(Embed11).then(m3a4x => {m3a4x.delete(20000)})
    }
})


client.on('message', m3a4x => {
  if (m3a4x.content.startsWith('$unmute')) {
if (!m3a4x.member.hasPermission("MOVE_MEMBERS")) return m3a4x.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = m3a4x.mentions.users.first()
 let mas = m3a4x.author
 if(!men) return m3a4x.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
 m3a4x.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         SEND_MESSAGES: true
         })
    })
const embed = new Discord.RichEmbed()
.setColor("#36393e")
.setDescription(`**
 <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${m3a4x.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(m3a4x.guild.name, m3a4x.guild.iconURL)
.setDescription(`          <@${men.id}>
تم فك الميوت الكتابي 
بواسطة : <@${m3a4x.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
m3a4x.channel.sendEmbed(Embed11).then(m3a4x => {m3a4x.delete(20000)})
    }
})
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20

var prefix = "$"

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20

 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("$avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});


 client.on("message", message => {
    var prefix = "$"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
	var prefix = "$";
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("FFFFFF")
            .setDescription("**ترجمة الكتابة.**\استعمل: `-translate <الكلمة لتبي> <االغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ترجمة الكتابة.**\استعمل: `$translate <الكلمة لتبي> <االغة>`");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`Input`, `\`\`\`${args}\`\`\``)
                    .setColor("#42f4c8")
                    .addField(`Output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});
client.login(process.env.BOT_TOKEN);
