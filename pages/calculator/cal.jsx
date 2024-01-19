{% paginate customer.addresses by 5 %}

  <div
    class="customer--root"
    data-section-id="{{ section.id }}"
  >
    <div class="customer--wrapper ">
      <div class="user-account-left">
        <div class="account-title" data-underline="account"><a href="{{ '/account' }}">Account</a>
        <div class="underline"></div>
        </div>
        <div class="account-title" data-underline="addresses" >
              <a id="view_address" href="{{ routes.account_addresses_url }}">
                Addresses
                {% comment %} {{ 'customer.account.view_addresses' | t }} {% endcomment %}
              </a>
              <div class="underline"></div>
          </div>
             <div class="account-title" data-underline="orders" >
              <a href="{{ '/pages/orders' }}">Orders</a>
              <div class="underline"></div>
            </div>
            <div class="logout-btn" data-underline="logout" ><a>{{ 'customer.account.logout' |t }}</a>
              <div class="underline"></div>
            </div>
           <div class="parent-logout-screen" style="display:none;">
              <div class="logout-screen">
                 <div class="logout-container">
                  <p class="logout-title">Logout</p>
               <div class="logout-cancel" data-item="block-link">
                    <div>{% render 'icons', icon: 'cross-icon'%}</div>
                  </div>
                  </div>
               <p class="are-u-sure">Are you sure, you want to logout?</p>
               <div class="logout-click" data-item='button'>
                  <button type="submit">
                    {{ 'customer.account.logout' | t | customer_logout_link }}   </button>
                </div>
                <div class="logout-cancel" data-item="block-link">
                  <a>
                    {{ 'customer.addresses.cancel' | t }}
                  </a>
                </div>
             </div>
           </div>

      </div>
      <div class="user-account-right">
      {% comment %} <div class="customer-address-container" id="customer-addresses">
        <h1 data-item="section-heading">
          {{ 'customer.addresses.page_title' | t }}
        </h1>
        <div class="account--breadcrumb-container">
          {% render 'breadcrumbs' %}
        </div> {% endcomment %}

        <div class="address--container">
          <div class="address-container-left">
          {% for address in customer.addresses %}
            <div class="address--table">
              <div id="view_address_{{ address.id }}" class="address--customer">
                {% comment %} <h4 data-item="block-heading">
                  {{ address.street }}
                </h4> {% endcomment %}

                <div class="address--view" data-item="paragraph">
                  <p>{{ address.first_name }} {{ address.last_name }} {% if address == customer.default_address %}
                    <span data-item="paragraph">
                      {{ 'customer.addresses.default' | t }}
                    </span>
                  {% endif %}</p>
                  <p>{{ address.company }}</p>
                  <p>{{ address.street }}</p>
                  <p>
                    {{ address.city }}{% if address.province_code %}, {{ address.province_code }}{% endif %}
                  </p>
                  <p>{{ address.country }} {{ address.zip }}</p>
                  <p>{{ address.phone }}</p>
                </div>
              </div>
              <p class="address--actions">
                <span class="address--actions-edit" data-item="block-link">
                  {{ 'customer.addresses.edit' | t | edit_customer_address_link: address.id }}
                </span>
                <span class="address--actions-delete" data-item="block-link" href="##">
                  Delete
                  {{ t | delete_customer_address_link: address.id }}
                </span>
              </p>

           <div class="parent-address-delete-screen" id="delete_address_{{ address.id }}" style="display:none;">
            <div class="delete-screen">
               <div class="delete-container">
                <p class="delete-title">Delete Address</p>
             <div class="delete-cancel" data-item="block-link">
                  <div>{% render 'icons', icon: 'cross-icon'%}</div>
                 </div>
                 </div>
             <p class="are-u-sure">Are you sure, you want to delete this address?</p>
              <div class="delete-click  btn-wrapper" data-item='button'>
                 <button class="btn" type="submit">
                  {{ 'customer.addresses.delete' | t | delete_customer_address_link: address.id }}
                  </button>
              </div>
              <div class="delete-cancel" data-item="block-link">
                <a  href="##" onclick="Shopify.CustomerAddress.toggleDeleteAddress(); return false;">
                  Cancel
                  {{  t | delete_customer_address_link: address.id}}
                </a>
              </div>
           </div>
         </div>

              <div class="parent-address--edit" id="edit_address_{{ address.id }}" style="display:none;">
              <div class="address--edit" >
                {% form 'customer_address', address %}
                  <div class="address--customer-table">
                    <div class="add-new-and-cancel">
                      <h1>Edit address</h1>
                      <span data-item="block-link">
                        <a
                          href="#"
                          onclick="Shopify.CustomerAddress.toggleForm({{ form.id }}); return false;">
                        <div>{% render 'icons', icon: 'cross-icon'%}</div>
                        </a>
                      </span>
                    </div>
                        <div class="edit-form-group-cotainer">
                        <div class="edit-form-group" onclick="updateInputDisplay('address_first_name_{{ address.id }}')">
                        <div class="edit-form-label" for="first">First Name</div>
                        <input
                          class="edit-form-input"
                          type="text"
                          id="address_first_name_{{ address.id }}"
                          name="address[first_name]"
                          value="{{ form.first_name }}"
                          size="40"
                        />
                        </div>
                        </div>

                        <input
                          class="input-text"
                          type="text"
                          id="address_last_name_{{ address.id }}"
                          name="address[last_name]"
                          value="{{ form.last_name }}"
                          size="40"
                        />

                        <input
                          class="input-text"
                          type="text"
                          id="address_company_{{ address.id }}"
                          name="address[company]"
                          value="{{ form.company }}"
                          size="40"
                        />

                        <input
                          class="input-text"
                          type="text"
                          id="address_address1_{{ address.id }}"
                          name="address[address1]"
                          value="{{ form.address1 }}"
                          size="40"
                        />

                        <input
                          class="input-text"
                          type="text"
                          id="address_address2_{{ address.id }}"
                          name="address[address2]"
                          value="{{ form.address2 }}"
                          size="40"
                        />

                        <input
                          class="input-text"
                          type="text"
                          id="address_city_{{ address.id }}"
                          name="address[city]"
                          value="{{ form.city }}"
                          size="40"
                        />
                      {% comment %} </td>
                    </tr>
                    <tr>
                      <td> {% endcomment %}
                        <label data-item="accent-text" for="address_country_{{ address.id }}">
                          {{ 'customer.addresses.country' | t }}
                        </label>
                      {% comment %} </td>
                      <td> {% endcomment %}
                        <select
                          id="address_country_{{ address.id }}"
                          name="address[country]"
                          data-default="{{ form.country }}"
                        >
                          {{ all_country_option_tags }}
                        </select>
                      {% comment %} </td>
                    </tr> {% endcomment %}
                    <div id="address_province_container_{{ address.id }}" style="display:none;">
                      {% comment %} <td>
                        <label data-item="accent-text" for="address_province_{{ address.id }}">
                          {{ 'customer.addresses.province' | t }}
                        </label>
                      </td>
                      <td> {% endcomment %}
                        <select
                          class="input-text"
                          id="address_province_{{ address.id }}"
                          name="address[province]"
                          data-default="{{ form.province }}"
                        >
                        </select>
                        </div>

                        <input
                          class="input-text"
                          type="text"
                          id="address_zip_{{ address.id }}"
                          name="address[zip]"
                          value="{{ form.zip }}"
                          size="40"
                        />

                        <input
                          class="input-text"
                          type="text"
                          id="address_phone_{{ address.id }}"
                          name="address[phone]"
                          value="{{ form.phone }}"
                          size="40"
                        />
                      {% comment %} </td>
                    </tr>
                    <tr>
                      <td></td> {% endcomment %}
                      <div class="address--checkbox-container" data-item="paragraph">
                       <p> {{ form.set_as_default_checkbox }} </p>
                        <p class="check-box-text"></p>
                        <p>{{ 'customer.addresses.set_default' | t }}</p>
                      {% comment %} </td>
                    </tr> {% endcomment %}
                  </div>

                  <div class="update-address" data-item='button'>
                      <button type="submit" value="{{ 'customer.addresses.update' | t }}">
                        {{ 'customer.addresses.update' | t }}
                      </button>
                    </div>
                    <div class="update-cancel" data-item="block-link">
                      <a
                        href="#"
                        onclick="Shopify.CustomerAddress.toggleForm({{ form.id }}); return false;"
                      >
                        {{ 'customer.addresses.cancel' | t }}
                      </a>
                </div>
                {% endform %}
              </div>
              </div>
              </div>

            </div>
          {% endfor %}
          </div>
         <div class="customer-address-right">
          <div data-item="block-link">
            <a
              class="add-new-address"
              href="#"
              onclick="Shopify.CustomerAddress.toggleNewForm(); return false;"
            >
              {{ 'customer.addresses.add_new' | t }}
            </a>
          </div>
          </div>
        <div class="parent-edit" id="add_address" style="display:none;">
          <div class="edit_address" >
            {% form 'customer_address', customer.new_address %}

            {{ form.errors | default_errors }}

            <div class="address--customer-table">
            <div class="add-new-and-cancel">
              <h1>Add a new address</h1>
              <span data-item="block-link">
                <a  href="#" onclick="Shopify.CustomerAddress.toggleNewForm(); return false;">
                  <div>{% render 'icons', icon: 'cross-icon'%}</div>
                </a>
              </span>
            </div>
              {% comment %} <tr>
                <td>
                  <label data-item="accent-text" for="address_first_name_new">
                    {{ 'customer.addresses.first_name' | t }}
                  </label>
                </td>
                <td> {% endcomment %}
                  <div class="add-new-form-group-container">
                  <div class="add-new-form-group">
                   <label class="add-form-label" for="address_first_name_new">First Name</label>
                  <input
                    class="add-address-input-text"
                    type="text"
                    id="address_first_name_new"
                    name="address[first_name]"
                    value="{{ form.first_name }}"
                    size="40"
                  />
                  </div>
                  </div>
                {% comment %} </td>
              </tr>
              <tr>
                <td>
                  <label data-item="accent-text" for="address_last_name_new">
                    {{ 'customer.addresses.last_name' | t }}
                  </label>
                </td>
                <td> {% endcomment %}
                  <input
                    class="input-text"
                    type="text"
                    placeholder="Last Name"
                    id="address_last_name_new"
                    name="address[last_name]"
                    value="{{ form.last_name }}"
                    size="40"
                  />
                {% comment %} </td>
              </tr>
              <tr>
                <td>
                  <label data-item="accent-text" for="address_company_new">
                    {{ 'customer.addresses.company' | t }}
                  </label>
                </td>
                <td> {% endcomment %}
                  <input
                    class="input-text"
                    type="text"
                    placeholder="Company"
                    for="address_company_new"
                    name="address[company]"
                    value="{{ form.company }}"
                    size="40"
                  />
                {% comment %} </td>
              </tr>
              <tr>
                <td>
                  <label data-item="accent-text" for="address_address1_new">
                    {{ 'customer.addresses.address1' | t }}
                  </label>
                </td>
                <td> {% endcomment %}
                  <input
                    class="input-text"
                    type="text"
                    placeholder="Address 1"
                    id="address_address1_new"
                    name="address[address1]"
                    value="{{ form.address1 }}"
                    size="40"
                  />
                {% comment %} </td>
              </tr>
              <tr>
                <td>
                  <label data-item="accent-text" for="address_address2_new">
                    {{ 'customer.addresses.address2' | t }}
                  </label>
                </td>
                <td> {% endcomment %}
                  <input
                    class="input-text"
                    type="text"
                    placeholder="Address 2"
                    id="address_address2_new"
                    name="address[address2]"
                    value="{{ form.address2 }}"
                    size="40"
                  />
                {% comment %} </td>
              </tr>
              <tr>
                <td>
                  <label data-item="accent-text" for="address_city_new">
                    {{ 'customer.addresses.city' | t }}
                  </label>
                </td>
                <td> {% endcomment %}
                  <input
                    class="input-text"
                    type="text"
                    placeholder="City"
                    id="address_city_new"
                    name="address[city]"
                    value="{{ form.city }}"
                    size="40"
                  />
                {% comment %} </td>
              </tr>
              <tr>
                <td>
                  <label data-item="accent-text" for="address_country_new">
                    {{ 'customer.addresses.country' | t }}
                  </label>
                </td>
                <td> {% endcomment %}
                  <select
                   class="input-text"
                    id="address_country_new"
                    name="Country"
                    name="address[country]"
                    data-default="{{ form.country }}"
                  >
                  <option value="" disabled selected>Country</option>
                    {{ country_option_tags }}
                  </select>
                {% comment %} </td>
              </tr> {% endcomment %}
              <div id="address_province_container_new" style="display:none;">
                {% comment %} <td> {% endcomment %}
                  {% comment %} <label data-item="accent-text" for="address_province_new">
                    {{ 'customer.addresses.province' | t }}
                  </label> {% endcomment %}
                {% comment %} <td> {% endcomment %}
                  <select
                    class="input-text"
                    id="address_province_new"
                    name="Province"
                    name="address[province]"
                    data-default="{{ form.province }}"
                  >
                  <option data-item="accent-text" for="address_province_new">
                    {{ 'customer.addresses.province' | t }}</option>
                  </select>
               </div>

                {% comment %} </td>
              </tr>
              <tr>
                <td>
                  <label data-item="accent-text" for="address_zip_new">
                    {{ 'customer.addresses.zip' | t }}
                  </label>
                </td>
                <td> {% endcomment %}
                  <input
                    class="input-text"
                    type="text"
                    placeholder="Postal/Zip Code"
                    id="address_zip_new"
                    name="address[zip]"
                    value="{{ form.zip }}"
                    size="40"
                  />
                {% comment %} </td>
              </tr>
              <tr>
                <td>
                  <label data-item="accent-text" for="address_phone_new">
                    {{ 'customer.addresses.phone' | t }}
                  </label>
                </td>
                <td> {% endcomment %}
                  <input
                    class="input-text"
                    type="text"
                    placeholder="Phone"
                    id="address_phone_new"
                    name="address[phone]"
                    value="{{ form.phone }}"
                    size="40"
                  />
                {% comment %} </td>
              </tr>
              <tr>
                <td></td> {% endcomment %}
                <div class="address--checkbox-container" data-item="paragraph">
                 <p> {{ form.set_as_default_checkbox }}</p> <p class="check-box-text">{{ 'customer.addresses.set_default' | t }}</p>
                </div>
              {% comment %} </tr>
            </table> {% endcomment %}

            {% comment %} <div class="address--button-container"> {% endcomment %}
              <div class="update-address" data-item='button'>
                <button type="submit" value="{{ 'customer.addresses.update' | t }}">
                  {{ 'customer.addresses.update' | t }}
                </button>
              </div>
              <div class="update-cancel" data-item="block-link">
                <a  href="#" onclick="Shopify.CustomerAddress.toggleNewForm(); return false;">
                  {{ 'customer.addresses.cancel' | t }}
                </a>
              </div>
            {% comment %} </div> {% endcomment %}
          {% endform %}
        </div>
        </div>

        {% if paginate.pages > 1 %}
          <div class="address--pagination">
            {% render 'pagination', paginate: paginate %}
          </div>
        {% endif %}
      </div>
      </div>
    </div>
  </div>

  <script type="text/javascript" charset="utf-8">
    // initialize observers on address selectors
    function onAddressLoad() {
      new Shopify.CountryProvinceSelector(
        'address_country_new', 'address_province_new',
        { hideElement: 'address_province_container_new' }
      );

      {% for address in customer.addresses %}
        new Shopify.CountryProvinceSelector(
          'address_country_{{ address.id }}', 'address_province_{{ address.id }}',
          { hideElement: 'address_province_container_{{ address.id }}' }
        );
      {% endfor %}
    }
  </script>
  <script
    src="{{ 'addresses.min.js' | asset_url }}"
    defer="defer"
    onload="onAddressLoad()"
  >
  </script>

{% endpaginate %}
<script>
//   $('.template-filter').on('click', function() {
// 	$('.active-filter').removeClass('active-filter');
// 	$(this).addClass('active-filter');
// });

console.log('{{ request.path }}')

document.querySelectorAll('.account-title').forEach(item => {
  let url = `{{request.path}}`.split('/')
  console.log(url)

  if(item.dataset.underline == url[url.length - 1]){
      item.className += ' active-filter'

  }
})
</script>
