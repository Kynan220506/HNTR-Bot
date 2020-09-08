const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () =>{
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setPresence({
        status: "dnd",  
        game:{
            name: ".info",  
            type: "LISTENING" 
        }
    });
 });

bot.on('message', (message)=>{

    if(message.content === 'ping'){
        message.channel.send('pong');
    }else if(message.content === 'BigBot'){
        message.reply('did you called me?');
    }else if(message.content === 'yes'){
        message.channel.send('what happedned?');
    }else if(message.content === 'nothing'){
        message.channel.send('Then why did you wake me up');
    }else if(message.content === 'sleep'){
        message.channel.send('oh nvm, im going back to sleep');
    }else if(message.content === 'no'){
        message.channel.send('oh nvm, im going back to sleep');
    }else if(message.content === '@everyone'){
        message.reply('Stop pinging everyone stupid.');
    }else if(message.content === 'Hey'){
        message.reply('wassup');
    }else if (message.content === `.server-info`){
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === '.user-info'){
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}else if(message.content === 'hey'){
        message.reply('wassup');
    }else if(message.content === '.info'){
        message.channel.send('I am made By HNTR_Kai#2264. He is my father and also the father of The HNTRS.');
    }else if(message.content === '.invite'){
        message.channel.send('Join The HNTRS https://discord.gg/HWxguDz');
    }else if(message.content === '.website'){
        message.channel.send('https://hntrclan14.wixsite.com/thehntrs');
    }else if(message.content === '911'){
        message.reply('what is the emergency?');
    }else if(message.content === 'fire'){
        message.reply('the fire is out'); 
    }else if(message.content === 'robbers'){
        message.reply('call the police');
    }else if(message.content === 'police'){
        message.reply('police died in a car accident');
    }else if(message.content === '.krunker'){
        message.channel.send('https://krunker.io/');
    }else if(message.content === '.1v1'){
        message.channel.send('https://1v1.lol/');
    }else if(message.content === '.venge'){
        message.channel.send('https://venge.io/');
    }else if(message.content === '.setNSFW'){
        message.channel.setNSFW(true);
        message.channel.send('NSFW On');
    }else if(message.content === '.ping'){
        message.channel.send('Check ur wifi stupid');
    }else if(message.content === `${bot.user.tag}`){
        message.channel.send('What do you want now?')
    }
});

bot.login('NzQyNDEwMTQyMDQ1MTc1ODE4.XzFtUw.84vXmdHZVelURbA414ji9Kee0oE');
