public class ReservadeEventos_SalvarReserva {
    @AuraEnabled
    public static void salvaReserva(String nome, Date data, Integer numeroParticipantes, Double valorParticipantes){
        ReservaEvento__c reserva = new ReservaEvento__c ();
        
        reserva.NomeCliente__c = nome;
        reserva.DataEvento__c = data;
        reserva.NumeroParticipantes__c = numeroParticipantes;
        reserva.ValorParticipante__c = valorParticipantes;
        
        insert reserva;
  }
}