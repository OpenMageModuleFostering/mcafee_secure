<?php
/**
 * News controller
 *
 * @author Magento
 */
class Mcafeesecure_Trustmark_Adminhtml_TrustmarkController extends Mage_Adminhtml_Controller_Action
{
    public function indexAction()
    {
      Mage::log("Aloha!!!!", null, "magento1.log");
      $this->loadLayout();
      $this->renderLayout();
    }
}
