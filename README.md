********************************************************Salesforce*******************************************************

************************** Desenvolvimento ********************************

Objeto Personalizado chamado "Reserva de Evento" coms os seguintes campos:

Nome do Cliente (Campo Texto)                                  
Data do Evento (Campo Data)
Número de Participantes (Campo Numérico)
Valor por Participante (Campo Moeda)
Valor Total da Reserva (Campo Moeda, Calculado)

******************************************************************************************************

RÓTULO DO CAMPO ************* NOME DO CAMPO ************ TIPO DE DADOS

Nome do Cliente **************** NomeCliente__c *************** Área de texto(255)

Data do Evento ************** DataEvento__c	****************** Data

Número de Participantes ***** NumeroParticipantes__c ******** Número(18, 0)

Valor por Participante ******* ValorParticipante__c ************** Moeda(18, 0)

Valor Total da Reserva ****** ValorTotalReserva__c ************** Fórmula (Moeda)

*****************************************************************************************************

Componente LWC chamado "Criação de Reserva".

Fornecer um formulário de frontend para preencher os detalhes da reserva, incluindo:

Nome do Cliente (Campo Texto) <br>                                
Data do Evento (Campo Data) <br> 
Número de Participantes (Campo Numérico) <br> 
Valor por Participante (Campo Moeda) <br> 

Calcular automaticamente o "Valor Total da Reserva" com base no número de participantes e no valor por participante.
O Cálculo deve ser feito em tempo real à medida que o usuário preencha o formulário.
Botão "Salvar Reserva" que salvará os dados da reserva no banco de dados como um registro de "Reserva de Evento"
Configure a página inicial do Salesforce para incluir o componente "Criação de Reserva" para que os usuários possam acessá-lo facilmente.

**********************************************************************************************************************************************






https://github.com/SATILAM/Reserva-de-Eventos/assets/101275634/4f7333c6-2f76-4e7a-8c0c-d4806426aa13




