import { LightningElement } from 'lwc';
export default class GetFailedJobResult extends LightningElement {
 jobId = '';

    handleInputChange(event) {
        this.jobId = event.target.value;
    }

    openJobResult() {
        if (this.jobId) {
            const baseUrl = 'https://naw-controls-tencia-8g6oid.5sc6y6-4.usa-e2.cloudhub.io/getFailedJobResult?jobId=';
            const fullUrl = `${baseUrl}${encodeURIComponent(this.jobId)}`;
            window.open(fullUrl, '_blank');
        } else {
            // Optional: Add validation or toast for empty input
            alert('Please enter a Job Id.');
        }
    }
}