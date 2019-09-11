# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
UserJob.destroy_all
Job.destroy_all
User.destroy_all

u = User.create(username: 'Fede', email: "fede@fede.com", password: "fede")
u1 = User.create(username: 'Nick', email: "nick@nick.com", password: "nick")
u2 = User.create(username: 'Jo', email: "jo@jo.com", password: "jo")

j = Job.create(title: "Computer screen repair", summary: "I am elderly and can't get my computer screen to work", category: "Elderly", description: "I am quite old and not used to technology, my computer screen doesn't work and I could use some help.", user_id: u1.id, address: "Chelsea, London, United Kingdom" ,lat: 51.4869429, lng: -0.17003699999997934)
j1 = Job.create(title: "Balloon sculptor", summary: "Need balloon sculptor for charity fundraiser", category: "Children", description: "Come along to our charity fundraiser! We desperately need a balloon sculptor to replace someone that has dropped out last minute.", user_id: u.id, address: "Camden, London, United Kingdom" ,lat: 51.5390261, lng: -0.1425515999999334)
j2 = Job.create(title: "Help clearing garage", summary: "Our garage has been flooded and we need help", category: "Indoor", description: "Our garage flooded in the recent storms and we really need help to clean it out so that we can make repairs.", user_id: u.id, address: "Stoke Newington, London, United Kingdom" ,lat: 51.5612319, lng: -0.08288659999993797)
j3 = Job.create(title: "Walk my dog", summary: "Beautiful pug needs a walk", category: "Animals", description: "Our pug needs a walk while we go to visit my unwell Mother, any help is greatly appreciated.", user_id: u1.id, address: "Harrow, London, United Kingdom" ,lat: 51.580559, lng: -0.34199499999999716)
j4 = Job.create(title: "Cut my grandmothers grass", summary: "Need someone to assist my grandma with her garden", category: "Outdoor", description: "I usually help my grandma cut her grass but I am away for a few weeks on a business trip, it'd be great if someone could help! She promises tea and biscuits.", user_id: u2.id, address: "Brixton, London, United Kingdom" ,lat: 51.4612794, lng: -0.11561480000000302)
j5 = Job.create(title: "Keep my grandfather company", summary: "My grandfather a WW2 veteran would love some company", category: "Elderly", description: "My grandfather loves to be social but unfortunately I've had to move a little further away, looking for someone that could regularly visit him, he has some great stories about WW2!", user_id: u2.id, address: "West Ham, London, United Kingdom" ,lat: 51.538008, lng: 0.012475099999960548)


uj11 = UserJob.create(user_id: u.id, job_id: j1.id)
uj22 = UserJob.create(user_id: u.id, job_id: j2.id)
uj23 = UserJob.create(user_id: u2.id, job_id: j3.id)
uj13 = UserJob.create(user_id: u1.id, job_id: j3.id)
uj14 = UserJob.create(user_id: u1.id, job_id: j4.id)
uj24 = UserJob.create(user_id: u2.id, job_id: j4.id)

puts "SEEDED"
