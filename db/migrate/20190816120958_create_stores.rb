class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :owner_name
      t.string :store_name
      t.text :address1
      t.text :address2
      t.string :city
      t.string :state
      t.string :pincode

      t.timestamps
    end
  end
end
