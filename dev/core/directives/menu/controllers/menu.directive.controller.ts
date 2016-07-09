import {IMenuDirectiveServiceImplementation} from '../services/menu.directive.service';
import {IMenuItemEntity} from '../entities/menu.item.entity';

export interface IMenuDirectiveController {

}

export class MenuDirectiveController
    implements IMenuDirectiveController {
    public static $inject = ['MenuDirectiveService', '$timeout'];
    public menu: Array<IMenuItemEntity> = [];
    constructor(
        MenuDirectiveService: IMenuDirectiveServiceImplementation,
        private $timeout: ng.ITimeoutService
    ) {
        this.menu = MenuDirectiveService.getItems();
    }

    private prepareMenu() {
        this.$timeout(() => {
            $('#sidebar-menu li ul').slideUp();
            $('#sidebar-menu li').removeClass('active');

            $('#sidebar-menu li').click(function () {
                if ($(this).is('.active')) {
                    $(this).removeClass('active');
                    $('ul', this).slideUp();
                    $(this).removeClass('nv');
                    $(this).addClass('vn');
                } else {
                    $('#sidebar-menu li ul').slideUp();
                    $(this).removeClass('vn');
                    $(this).addClass('nv');
                    $('ul', this).slideDown();
                    $('#sidebar-menu li').removeClass('active');
                    $(this).addClass('active');
                }
            });

            $('#menu_toggle').click(function () {
                if ($('body').hasClass('nav-md')) {
                    $('body').removeClass('nav-md');
                    $('body').addClass('nav-sm');
                    $('.left_col').removeClass('scroll-view');
                    $('.left_col').removeAttr('style');
                    $('.sidebar-footer').hide();

                    if ($('#sidebar-menu li').hasClass('active')) {
                        $('#sidebar-menu li.active').addClass('active-sm');
                        $('#sidebar-menu li.active').removeClass('active');
                    }
                } else {
                    $('body').removeClass('nav-sm');
                    $('body').addClass('nav-md');
                    $('.sidebar-footer').show();

                    if ($('#sidebar-menu li').hasClass('active-sm')) {
                        $('#sidebar-menu li.active-sm').addClass('active');
                        $('#sidebar-menu li.active-sm').removeClass('active-sm');
                    }
                }
            });
        })
    }

}