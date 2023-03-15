<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>About</h1>
            </div>
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Carrera</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="student of students">
                            <td>{{student.id}}</td>
                            <td>{{student.name}}</td>
                            <td>{{student.carrera}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import students from '@/assets/json/alumnos.json'

    export default{
        data(){
            return{
                students:students/* .reverse() */
            }
        }
    }
</script>