const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$"
const UserBlocked = new Set();




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help ForHelp || By ! [ ̃̍͋♔ 3̶͘mOOreeèͤ̚ ̸̛͢♪ ]҉`,"http://twitch.tv/Mohamed192837465")
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
   if (message.content.startsWith("$كت تويت")) {
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



client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "$";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "MiDo_<3";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('```**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**```');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });




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



client.on('message', message => {
    var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});



client.on('message', message => {
    var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
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


client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('MiDo_<3',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});



const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

client.on('message', msg => {
if (msg.content.startsWith( "$cal" )) {
  let args = msg.content.split(" ").slice(1);
      const question = args.join(' ');
  if (args.length < 1) {
      msg.reply('**من فضلك .. قم بكتابة سؤال **.');
} else {    let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return msg.reply(`Error: ${err}`);
  }

  const embed = new Discord.RichEmbed()
  .setThumbnail('https://banner2.kisspng.com/20180215/ade/kisspng-office-supplies-animation-calculator-5a85e764e3aa68.4914103215187249649325.jpg')
.setDescription(`**
 السؤال يقولك :thinking:  : ${question}
 طبعا الاجابة :writing_hand: : ${answer}**
`)
  msg.channel.send(embed)
  }
};
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
         message.channel.send('**تم ارسال الاوامر بالخاص :mailbox_with_mail:**');
  const embed = new Discord.RichEmbed()
         
    
         

      .setColor("RANDOM")
.setDescription(`
 
╔[❖════════════❖]╗
Prefix   =    ' $ '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
Admin   ✻  Commands
╚[❖════════════❖]╝

 ❖ $kick <mention > ➾ kick member from server

 ❖ $ban  <mention > ➾ ban member from server

 ❖ $mute < mention > ➾ mute member

 ❖ $unmute <mention> ➾ unmute member

 ❖ $startdisco ➾ for startdisco role
  
 ❖ $bc <message> ➾ message all members in server

 ❖ $role ➾ for help role

╔[❖════════════❖]╗
General  ✻ Commands
╚[❖════════════❖]╝


❖ $id ➾ your id // عشان تشوف ايدي حقك

❖ $avatar ➾ your avatar account // عشان تشوف صورت حسابك

❖ $ping ➾ to see ping // عشان تشوف بنقك
 
❖ $xo  ➾ for playing xo with ur friend // عشان تلعب اكس اوه مع صديقك

❖ $كت تويت ➾ for ask cut tweet // عشان يطلعلك اساله كت تويت

❖ $فكك ➾ for playing fakk // عشان تلعب فكك

❖ $cal ➾ for Calculator // الاله الحاسبه

❖ $say ➾ for Repeat your words whith bot // بوت يكرر كلامك

❖ اخر شي في ترحيب بالبوت 

==================================================================

Server support : https://discord.gg/Ze7wrG

==================================================================

bot invite link : https://discordapp.com/api/oauth2/authorize?client_id=498107917615235082&permissions=8&scope=bot
❤ By ❤  : ! [ ̃̍͋♔ 3̶͘mOOreeèͤ̚ ̸̛͢♪ ]҉#6464  
==================================================================
`);
  message.author.send({embed});
    }
});





client.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = '463274058520330240'; // <=============== ايدي السيرفر حقك
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});



var fkk =[
        {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
        {f:"فكك باص",k:"ب ا ص"},
        {f:"فكك عربة ",k:"ع ر ب ة"},
        {f:"فكك سيارة",k:"س ي ا ر ة"},
        {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
        {f:"فكك العنود ",k:"ا ل ع ن و د"},
        {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
        {f:"فكك دحوم",k:"د ح و م"},
        {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
        {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
        {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
        {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
        {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
        {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
        {f:"فكك زنديق  ",k:"ز ن د ي ق"},
        {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
        {f:"فكك سوريا ",k:"س و ر ي ا"},
        {f:"فكك الاردن ",k:"ا ل ا ر د ن"},
        {f:"فكك طماطم ",k:"ط م ا ط م"},
        {f:"فكك سارة ",k:"س ا ر ة"},
        {f:"فكك دراجون ",k:"د ر ا ج و ن"},
        {f:"فكك سيرفر ",k:"س ي ر ف ر"},
        {n:"فكك الجبل",m:"ا ل ج ب ل"},
        {n:"فكك هضبة",m:"ه ض ب ة"},
        {n:"فكك خواطر",m:"خ و ا ط ر"},
        {n:"فكك ارحبو",m:"ا ر ح ب و"},
        {n:"فكك اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
        {n:"فكك احبك",m:"ا ح ب ك"},
        {n:"فكك سبرايز",m:"س ب ر ا ي ز"},
        {n:"فكك ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
        {n:"فكك الو محد",m:"ا ل و م ح م د"},


   ];


   client.on("message", async message => {
	   var prefix = "$";
    if(message.content == prefix+"فكك"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = fkk[Math.floor(Math.random() * fkk.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('لعبة فكك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.f);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "فكك") return
           if(result.content == ask.k){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord.RichEmbed()
             .setTitle(':x:خطاء')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة خاطئة`);

                message.channel.sendEmbed(embedx);
           }
     });
  }
});



client.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //هنا حط الصوره الي تبيها
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
    .addField('``تاق العضو``', Sal.user.discriminator, true)
    .addField('``تم الانشاء في``', Sal.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', ' (ᏔᎬᏞᏨᏫᎷᎬ)') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });


client.login(process.env.BOT_TOKEN);
