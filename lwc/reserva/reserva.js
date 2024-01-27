import { LightningElement, track } from 'lwc';
import salvaReserva from '@salesforce/apex/ReservadeEventos_SalvarReserva.salvaReserva';

export default class ReservaComponent extends LightningElement {
   
    @track nome = '';
    @track data = ''; 
    @track numeroParticipantes = null;
    @track valorParticipantes = null; 
    @track sucessoMessage = '';
    @track errorMessage = '';

    handleNameChange(e) {
        this.nome = e.target.value;
    }

    handleDataChange(e) {
     
        const inputDate = new Date(e.target.value);
        const year = inputDate.getFullYear();
        let month = inputDate.getMonth() + 1;
        let day = inputDate.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        this.data = `${year}-${month}-${day}`;
    }

    handleNPChange(e) {
        this.numeroParticipantes = e.target.value;
     
        this.calcularValorTotal = this.calcularTotal();
    }

    handleVPChange(e) {
        this.valorParticipantes = e.target.value;
      
        this.calcularValorTotal = this.calcularTotal();
    }

    calcularTotal() {
        return this.numeroParticipantes * this.valorParticipantes;
    }

    chama() {
       
        salvaReserva({
            nome: this.nome,
            data: this.data,
            numeroParticipantes: this.numeroParticipantes,
            valorParticipantes: this.valorParticipantes
        })
        .then(result => {
            var campo = document.querySelectorAll(".campo");
            
            setTimeout(()=>{
                this.sucessoMessage = 'Reserva criada com sucesso!';
                this.errorMessage = '';
                
            }, 2000)

            this.sucessoMessage = '';
            this.errorMessage = ''; 
            
            console.log('Reserva criada com sucesso: ', result);
           
            campo.forEach(e =>{
                e.target.value = '';
            })

        })
        .catch(error => { 
            this.errorMessage = 'Erro ao criar reserva: ' + error.message;
            this.sucessoMessage = ''; 
            console.error('Erro ao criar reserva: ', error);
            console.error('Erro ao criar reserva: ', error);
        });
    }
}





















