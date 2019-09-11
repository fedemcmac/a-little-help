class User < ApplicationRecord

    # validates :email, uniqueness: true#, :message => "This email has already been used"

    has_secure_password
    has_many :jobs
    alias_attribute :created_jobs, :jobs
    has_many :user_jobs
    has_many :helping_jobs, through: :user_jobs, source: :job

    def token
        JWT.encode({ user_id: self.id }, ENV['RAILS_SECRET'])
    end

    # def self.decode_token_and_return_the_user_who_made_the_request(token)
    def self.decode_token(token)
        payload = JWT.decode(token, ENV['RAILS_SECRET'])[0]
        self.find(payload["user_id"])
    end

end
