document.addEventListener('DOMContentLoaded', () => {
cargarClientesDesdeLocalStorage();});
function agregarCliente() {
const nombre = document.getElementById('nombre').value;
const cuit = document.getElementById('cuit').value;
const telefono = document.getElementById('telefono').value;
if (validarDatos(nombre, cuit, telefono)) {
const cliente = { nombre, cuit, telefono };
agregarClienteATabla(cliente);
guardarClienteEnLocalStorage(cliente);
limpiarFormulario();}}
function validarDatos(nombre, cuit, telefono) {
const cuitRegex = /^[0-9]{11}$/;
const telefonoRegex = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
if (!cuitRegex.test(cuit)) {
alert('Ingrese un CUIT válido (11 dígitos).');
return false;}
if (!telefonoRegex.test(telefono)) {
alert('Ingrese un teléfono válido (ej. 123-4567-8901).');
return false;
}
return true;}
function agregarClienteATabla(cliente) {
const tableBody = document.getElementById('clientesBody');
const row = tableBody.insertRow();
row.insertCell(0).textContent = cliente.nombre;
row.insertCell(1).textContent = cliente.cuit;
row.insertCell(2).textContent = cliente.telefono;}
function guardarClienteEnLocalStorage(cliente) {
let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
clientes.push(cliente);
localStorage.setItem('clientes', JSON.stringify(clientes));}
function cargarClientesDesdeLocalStorage() {
let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
clientes.forEach(agregarClienteATabla);}
function limpiarFormulario() {
document.getElementById('nombre').value = '';
document.getElementById('cuit').value = '';
document.getElementById('telefono').value = '';}