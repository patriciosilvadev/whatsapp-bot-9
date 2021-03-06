import request from "request";
import moment from 'moment';

interface IEconomia {
  getChat: () => any;
  reply: (args: string) => void;
}

export default async (msg: IEconomia) => {
  const chat = await msg.getChat();
  chat.sendStateTyping();

  const options: { method: string; url: string } = {
    method: "GET",
    url: "http://177.10.200.16:3050/contagemWS2",
  };

  


  const type = (endereco: {
    id?: string;
    campanha?: string;
    custo_voip?: string;
  }) => {
    return `* Campanha: (${endereco.campanha})*`;
  };

  request(options, async (error: any, response: any, body: any) => {
    if (error ?? response.statusCode !== 200)
      return msg.reply("Houve um erro inesperado.");


      const array = JSON.parse(body);

 
        

          msg.reply(

            `Total WS2:${array.contagem[0]['count(*)']} \n` 
          
            
         )
 

     

  
      

    

    const { campanha } = JSON.parse(body);

    console.log('ss')



    

  });
};
