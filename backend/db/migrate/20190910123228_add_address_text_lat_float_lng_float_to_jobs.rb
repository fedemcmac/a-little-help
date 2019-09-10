class AddAddressTextLatFloatLngFloatToJobs < ActiveRecord::Migration[5.1]
  def change
    add_column :jobs, :address, :text
    add_column :jobs, :lat, :float
    add_column :jobs, :lng, :float
  end
end
