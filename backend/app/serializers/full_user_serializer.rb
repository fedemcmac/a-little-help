class FullUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :helping_jobs_ids
  
  def helping_jobs_ids
      object.helping_jobs.map {|job| job.id}
  end

end
