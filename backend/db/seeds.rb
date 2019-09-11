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

j = Job.create(title: "Computer screen repair", summary: "I am elderly and can't get my computer screen to work", category: "Elderly", description: "I am quite old and not used to technology, my computer screen doesn't work and I could use some help.", user_id: u1.id, address: "Chelsea, London, United Kingdom" ,lat: 51.4869, lng: 0.1700)
j1 = Job.create(title: "Balloon sculptor", summary: "Need balloon sculptor for charity fundraiser", category: "Children", description: "Come along to our charity fundraiser! We desperately need a balloon sculptor to replace someone that has dropped out last minute.", user_id: u.id, address: "Camden, London, United Kingdom" ,lat: 51.5517, lng: 0.1588)
j2 = Job.create(title: "Help clearing garage", summary: "Our garage has been flooded and we need help", category: "Indoor", description: "Our garage flooded in the recent storms and we really need help to clean it out so that we can make repairs.", user_id: u.id, address: "Stoke Newington, London, United Kingdom" ,lat: 51.5597, lng: 0.0794)
j3 = Job.create(title: "Walk my dog", summary: "Beautiful pug needs a walk", category: "Animals", description: "Our pug needs a walk while we go to visit my unwell Mother, any help is greatly appreciated.", user_id: u1.id, address: "Harrow, London, United Kingdom" ,lat: 51.5806, lng: 0.3420)
j4 = Job.create(title: "Cut my grandmothers grass", summary: "Need someone to assist my grandma with her garden", category: "Outdoor", description: "I usually help my grandma cut her grass but I am away for a few weeks on a business trip, it'd be great if someone could help! She promises tea and biscuits.", user_id: u2.id, address: "Brixton, London, United Kingdom" ,lat: 51.4613, lng: 0.1156)
j5 = Job.create(title: "Keep my grandfather company", summary: "My grandfather a WW2 veteran would love some company", category: "Elderly", description: "My grandfather loves to be social but unfortunately I've had to move a little further away, looking for someone that could regularly visit him, he has some great stories about WW2!", user_id: u2.id, address: "West Ham, London, United Kingdom" ,lat: 51.5255, lng: 0.0352)


uj11 = UserJob.create(user_id: u.id, job_id: j1.id)
uj22 = UserJob.create(user_id: u.id, job_id: j2.id)
uj23 = UserJob.create(user_id: u2.id, job_id: j3.id)
uj13 = UserJob.create(user_id: u1.id, job_id: j3.id)
uj14 = UserJob.create(user_id: u1.id, job_id: j4.id)
uj24 = UserJob.create(user_id: u2.id, job_id: j4.id)

puts "SEEDED"
