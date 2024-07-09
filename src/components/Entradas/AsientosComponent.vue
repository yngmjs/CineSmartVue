<template>
    <div class="container mt-4">
      <h2 class="text-light">Selecciona Asiento(s)</h2>
      <div class="row justify-content-center">
        <div class="d-flex justify-content-center">
            <img src="/src/assets/pantalla.png" alt="">
        </div>
        <div>
            <br>
        </div>
        <div
          v-for="(row, rowIndex) in seats"
          :key="rowIndex"
          class="col-12 d-flex justify-content-center mb-3">
          <div
            v-for="(seat, seatIndex) in row"
            :key="seatIndex"
            :class="['seat', seat.status, seat.selected ? 'selected' : '']"
            @click="toggleSeatSelection(rowIndex, seatIndex)"
          >
            {{ seat.number }}
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary" @click="confirmSelection">
          Confirmar Asientos
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SeatSelection",
    data() {
      return {
        seats: this.generateSeats(5, 4), // 5 rows of 4 seats each
      };
    },
    methods: {
      generateSeats(rows, seatsPerRow) {
        const seats = [];
        let seatNumber = 1;
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
          const row = [];
          for (let seatIndex = 0; seatIndex < seatsPerRow; seatIndex++) {
            row.push({
              number: seatNumber++,
              status: "available",
              selected: false,
            });
          }
          seats.push(row);
        }
        return seats;
      },
      toggleSeatSelection(rowIndex, seatIndex) {
        const seat = this.seats[rowIndex][seatIndex];
        if (seat.status === "available") {
          seat.selected = !seat.selected;
        }
      },
      confirmSelection() {
        const selectedSeats = this.seats
          .flatMap((row) =>
            row.filter((seat) => seat.selected).map((seat) => seat.number)
          );
        alert(`Selected Seats: ${selectedSeats.join(", ")}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .seat {
    width: 40px;
    height: 40px;
    margin: 5px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .seat.available {
    background-color: #093D77;
    color: white;
  }
  .seat.unavailable {
    background-color: #dc3545;
    color: white;
    cursor: not-allowed;
  }
  .seat.selected {
    background-color: #ccc;
    color: black;
  }
  </style>
  