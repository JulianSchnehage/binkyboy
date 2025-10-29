/**
 * JAVASCRIPT DEVELOPER DOCUMENTATION
 *
 * Symmetry is a powerful and customizable theme designed for large-scale e-commerce stores. Built
 * using Web Components, it offers a highly modular architecture that makes customization and
 * maintenance easier than ever. In addition, Symmetry is optimized for speed, ensuring that your
 * store runs as fast as possible to provide your customers with a seamless shopping experience.
 *
 * If you would like to add your own JS to Symmetry, we recommend using this file and referencing
 * it using Theme Settings > Advanced > Custom HTML.
 *
 * As a brief overview, Symmetry:
 *  - Broadcasts many JS events.
 *  - Is built using Web Components.
 *  - Leverages 'code splitting' for some features.
 *  - Is completely custom built (no JS libraries)
 *  - Has a number of JS utilities.
 *
 *
 *
 * =================================================================================================
 * Custom JavaScript Events
 * =================================================================================================
 *
 * Symmetry broadcasts many custom events for ease of extensibility, detailed in this section.
 *
 * When in the Theme Editor, the details of each custom event will be logged out in the Dev Tools
 * console everytime it is triggered.
 *
 * Events are named in the following convention: ["on/dispatch"]:[subject]:[action] (where
 * 'dispatch' will trigger an event to occur, and 'on' indicates an event has occurred).
 *
 * All 'Return data' detailed in this section is returned within the 'event.detail' object.
 *
 * The available events are:
 *  1.  on:variant:change
 *  2.  on:cart:add
 *  3.  on:cart:error
*   4.  on:cart:after-merge
 *  5.  on:cart-drawer:before-open
 *  6.  on:cart-drawer:after-open
 *  7.  on:cart-drawer:after-close
 *  8.  on:quickbuy:before-open
 *  9.  on:quickbuy:after-open
 *  10. on:quickbuy:after-close
 *  11. dispatch:cart-drawer:open
 *  12. dispatch:cart-drawer:refresh
 *  13. dispatch:cart-drawer:close
 *  14. on:debounced-resize
 *  15. on:breakpoint-change
 *
 * -------------------------------------------------------------------------------------------------
 * 1) on:variant:change
 * -------------------------------------------------------------------------------------------------
 * Fires whenever a variant is selected (e.g. Product page, Quickbuy, Featured Product etc).
 *
 * How to listen:
 * document.addEventListener('on:variant:change', (event) => {
 *  // your code here
 * });
 *
 * Returned data:
 *  - form: the product form content
 *  - variant: the selected variant object
 *  - allVariants: an array of all variants
 *  - selectedOptions: an array of currently selected options (e.g. ['Blue', 'Large'])
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 2) on:cart:add
 * -------------------------------------------------------------------------------------------------
 * Fires when a variant has been added to the cart, where it didn't exist in the cart before. This
 * event does not fire when the added variant was already in the cart.
 *
 * How to listen:
 * document.addEventListener('on:cart:add', (event) => {
 *   // your code here
 * });
 *
 * Returned data:
 *   - variantId: id of the variant that was just added to the cart
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 3) on:cart:error
 * -------------------------------------------------------------------------------------------------
 * Fires when an action related to the cart has failed, for example adding too much quantity of an
 * item to the cart.
 *
 * How to listen:
 * document.addEventListener('on:cart:error', (event) => {
 *   // your code here
 * });
 *
 * Returned data:
 *   - error: the error message
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 4) on:cart:after-merge
 * -------------------------------------------------------------------------------------------------
 * Fires after a list of cart items has finished being dynamically updated after a cart change.
 *
 * How to listen:
 * document.addEventListener('on:cart:after-merge', (event) => {
 *   // your code here
 * });
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 5) on:cart-drawer:before-open
 * -------------------------------------------------------------------------------------------------
 * Fires before the cart drawer opens.
 *
 * How to listen:
 * document.addEventListener('on:cart-drawer:before-open', (event) => {
 *   // your code here
 * });
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 6) on:cart-drawer:after-open
 * -------------------------------------------------------------------------------------------------
 * Fires after the cart drawer has finished opening.
 *
 * How to listen:
 * document.addEventListener('on:cart-drawer:after-open', (event) => {
 *   // your code here
 * });
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 7) on:cart-drawer:after-close
 * -------------------------------------------------------------------------------------------------
 * Fires after the cart drawer has finished closing.
 *
 * How to listen:
 * document.addEventListener('on:cart-drawer:after-close', (event) => {
 *   // your code here
 * });
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 8) on:quickbuy:before-open
 * -------------------------------------------------------------------------------------------------
 * Fires before the quick buy drawer opens.
 *
 * How to listen:
 * document.addEventListener('on:quickbuy:before-open', (event) => {
 *   // your code here
 * });
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 9) on:quickbuy:after-open
 * -------------------------------------------------------------------------------------------------
 * Fires after the quick buy drawer has finished opening.
 *
 * How to listen:
 * document.addEventListener('on:quickbuy:after-open', (event) => {
 *   // your code here
 * });
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 10) on:quickbuy:after-close
 * -------------------------------------------------------------------------------------------------
 * Fires after the quick buy drawer has finished closing.
 *
 * How to listen:
 * document.addEventListener('on:quickbuy:after-close', (event) => {
 *   // your code here
 * });
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 11) dispatch:cart-drawer:open
 * -------------------------------------------------------------------------------------------------
 * Opens the cart drawer (if enabled in the Theme Settings).
 *
 * How to trigger:
 * document.dispatchEvent(new CustomEvent('dispatch:cart-drawer:open'));
 *
 * You can optionally pass in a 'detail' object with a property of 'opener', which specifies the DOM
 * element that should be focussed on when the drawer is closed.
 *
 * Example:
 * document.getElementById('header-search').addEventListener('keydown', (evt) => {
 *   if (evt.keyCode === 67) {
 *     evt.preventDefault();
 *     document.dispatchEvent(new CustomEvent('dispatch:cart-drawer:open', {
 *       detail: {
 *         opener: evt.target
 *       }
 *     }));
 *   }
 * });
 *
 * In this example, we attach a keydown listener to the search input in the header. If the user
 * presses the 'c' key, it prevents the default behavior (which would be to type the letter 'c' in
 * the input) and dispatches the 'dispatch:cart-drawer:open' event with a 'detail' object that
 * specifies the search input as the opener. When the cart drawer is closed, focus is returned to
 * the search input.
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 12) dispatch:cart-drawer:refresh
 * -------------------------------------------------------------------------------------------------
 * Refreshes the contents of the cart drawer.
 *
 * This event is useful when you are adding variants to the cart and would like to instruct the
 * theme to re-render the cart drawer.
 *
 * How to trigger:
 * document.dispatchEvent(new CustomEvent('dispatch:cart-drawer:refresh', {
 *   bubbles: true
 * }));
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 13) dispatch:cart-drawer:close
 * -------------------------------------------------------------------------------------------------
 * Closes the cart drawer.
 *
 * How to trigger:
 * document.dispatchEvent(new CustomEvent('dispatch:cart-drawer:close'));
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 14) on:debounced-resize
 * -------------------------------------------------------------------------------------------------
 * Fires when the viewport finishes resizing (debounced to 300ms by default).
 *
 * How to listen:
 * window.addEventListener('on:debounced-resize', (event) => {
 *   // your code here
 * });
 *
 *
 * -------------------------------------------------------------------------------------------------
 * 15) on:breakpoint-change
 * -------------------------------------------------------------------------------------------------
 * Fires when the breakpoint of the viewport changes.
 *
 * Example:
 * window.addEventListener('on:breakpoint-change', (event) => {
 *  if (theme.mediaMatches.md) {
 *   console.log('we are not on mobile');
 *  }
 * });
 *
 *
 *
 * =================================================================================================
 * Web Components
 * =================================================================================================
 *
 * Symmetry utilizes Web Components to the fullest.
 *
 * Web Components are a set of standardized APIs that allow developers to create custom, reusable
 * HTML elements that can be used across different web pages and applications.
 * Web Components consist of three main technologies: Custom Elements, Shadow DOM and HTML
 * Templates.
 *
 * See Mozilla for more: https://developer.mozilla.org/en-US/docs/Web/Web_Components
 *
 *
 *
 =================================================================================================
 * Third-Party JavaScript Dependencies
 * =================================================================================================
 *
 * Symmetry has no third-party JavaScript dependencies.
 *
 *
 * =================================================================================================
 *
 * Have fun! - The Clean Canvas Development Team.
 */



// window.addEventListener('DOMContentLoaded',function () {

//     function rebuyFun() {
//         let rebuyButtonAll = document.querySelectorAll('.rebuy-button');
//         let cartItemQtyButtonAll = document.querySelectorAll('.rebuy-cart__flyout-item-quantity-widget-button');
//             rebuyButtonAll.forEach((rebuyButton)=>{
//                 rebuyButton.addEventListener('click',()=>{
//                      setTimeout(cartLength, 2000);
//                 });
//             });
//             cartItemQtyButtonAll.forEach((cartItemQtyButton)=>{
//                 cartItemQtyButton.addEventListener('click',()=>{
//                      setTimeout(cartLength, 2000);
//                 });
//             });
//             function cartLength(){ 
//                 // console.log('cliked --');
//                 fetch('/cart.js')
//                 .then(response => response.json())
//                 .then(cart => {
//                     let cartBubleCount = 0;
//                     console.log('cart data - ',cart)
//                     cart.items.map((cartItem)=>{
//                         cartBubleCount += cartItem.quantity;
//                     });
//                     console.log(cartBubleCount);
//                     document.querySelector('.cart-link__count').innerHTML = cartBubleCount;
//                 });
//             }
//     } 

//     setTimeout(rebuyFun, 4000);

// }); 


window.addEventListener('DOMContentLoaded', function () {
    function updateCartBubble() {
        fetch('/cart.js')
            .then(response => response.json())
            .then(cart => {
                let cartBubbleCount = cart.items.reduce((total, item) => total + item.quantity, 0);
                document.querySelector('.cart-link__count').innerHTML = cartBubbleCount;
            })
            .catch(error => console.error('Error fetching cart:', error));
            // console.log('buble update')
    }

    function observeCartChanges() {
        const cartDrawer = document.querySelector('.rebuy-cart__flyout');
        
        if (!cartDrawer) return;

        const observer = new MutationObserver(() => {
            updateCartBubble();
        });

        observer.observe(cartDrawer, { childList: true, subtree: true });
    }

    function initRebuyObserver() {
        observeCartChanges(); // Start observing cart updates
        updateCartBubble(); // Initial update
    }

    setTimeout(initRebuyObserver, 4000); // Delay to allow Rebuy to load


    // VARIANT JSON GET - STOCK INVENTORY

    function getUpdatedVariantData() {
        let productVariantJSONData = document.getElementById('product-variant-data');
        
        if (productVariantJSONData) {
            try {
                return JSON.parse(productVariantJSONData.textContent || "{}");
            } catch (error) {
                console.error("Error parsing variant JSON:", error);
                return {};
            }
        }
        return {};
    }
    

    let productQtyInput = document.querySelector('.quantity-wrapper input');
    if(productQtyInput){
        productQtyInput.addEventListener('input', () => {
            qtyInputEvent(productQtyInput);
        });
    }
    

    // let quantityButtonAll = document.querySelectorAll('.quantity-wrapper a');
    // quantityButtonAll.forEach((quantityButton) => {
    //     quantityButton.addEventListener('click',()=>{
    //         let qtyButtonHas = true;
    //         qtyInputEvent(productQtyInput);
    //     });
    // });
    
    function qtyInputEvent(productQtyInput){
        let productVariantData = getUpdatedVariantData(); // Get the latest JSON
        let qtyInputValue = Number(productQtyInput.value);
        let variantQty = productVariantData.variantInventoryQuantity || 0;
        let variantTitle = productVariantData.variantName;
    
        if (qtyInputValue > variantQty) {
            // qtyButtonHas == true ? productQtyInput.value = variantQty - 1 : productQtyInput.value = variantQty;
            productQtyInput.value = variantQty;
            // console.log("Adjusted to Max Available:", variantQty);
            let disclaimerMsg = `You can only add up to ${variantQty} units of ${variantTitle} to the cart.`;
            let variantInventoryDisclaimer = document.querySelector('.variant-inventory-disclaimer');
            variantInventoryDisclaimer.innerHTML = disclaimerMsg;
            variantInventoryDisclaimer.removeAttribute('hidden');
            document.querySelector('.quantity-increase').classList.add('disabled');
        }else{
            document.querySelector('.quantity-increase').classList.remove('disabled');
        }
    }
    

    // document.addEventListener('rebuy:cart.change', (event) => { 
    // console.log('rebuy:cart.change event', event.detail); 
    // });
});
