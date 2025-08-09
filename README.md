# 🏨 Schedulo - Sistema de Reserva de Salas e Quartos  

Uma API RESTful feita para gerenciar reservas de salas de reunião, quartos de hotel, coworkings ou qualquer espaço que você quiser — afinal, quem somos nós para limitar seus sonhos?   

---

## 🚀 Funcionalidades  
- **Cadastro de usuários** com autenticação segura (JWT)  
- **Listagem de salas/quartos** disponíveis  
- **Reserva com datas de check-in e check-out**  
- **Consulta de reservas existentes**  
- **Cancelamento de reservas**  
- **Filtragem por disponibilidade, tipo de espaço e data**  

---

## 🛠️ Tecnologias utilizadas  
- **Java 17**  
- **Spring Boot** 
- **Spring Security**   
- **MySQL** 
- **JPA / Hibernate**

- - **React JS**  

---

## 📦 Instalação e execução  

### Pré-requisitos  
- Java 17+  
- Maven  
- MySQL rodando (e configurado no `application.properties`)  

### Passos  
```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/sua-api-reservas.git

# Entrar no projeto
cd schedulo/backend

# Iniciar servidor backend
mvn spring-boot:run

#Entrar no projeto frontend
cd schedulo/frontend

#Baixar libs utilizadas
npm install

#Iniciar servidor frontend
npm run dev
